import ast
from rest_framework import status

from common.exceptions import APIError


class ExceptionParser:
    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = 'A server error occurred.'
    method = 'GET'
    route = '/'

    def parse(self, exception, request):
        self.method, self.path = request.method, request.get_full_path()
        self.status_code = self.get_status_code(exception)
        response = self.get_response_message(exception)
        return response, self.status_code

    def get_response_message(self, err):
        if type(err) == APIError:
            return {"error": err.detail}
        else:
            try:
                response_dict = ast.literal_eval(str(err))
                if self.is_success():
                    return response_dict
                else:
                    return self.simplify_dict_error_response(response_dict)
            except:
                response = self.force_simplify_error_response(err)
                return response

    def get_status_code(self, message):
        http_status = self.status_code
        if isinstance(message, Exception):
            if isinstance(message, APIError):
                http_status = message.status_code
            else:
                http_status = status.HTTP_400_BAD_REQUEST
        return http_status

    def is_success(self):
        if self.status_code % 200 <= 10:
            return True
        return False

    def simplify_dict_error_response(self, dict):
        key_value = dict[next(iter(dict))]
        if isinstance(key_value, list):
            key_value = key_value.pop()
        return {'error': key_value}

    def force_simplify_error_response(self, err):
        response = str(err)
        if self.status_code == status.HTTP_400_BAD_REQUEST:
            response = self.parse_400_error(response)
        if self.status_code == status.HTTP_409_CONFLICT:
            response = self.parse_409_error(response)
        return {'error': response}

    def parse_400_error(self, message):
        if 'matching query' in message:
            if 'cdn' in self.path:
                self.status_code = status.HTTP_404_NOT_FOUND
                return 'Resource not found.'
            return message.replace(' matching query ', ' ')
        elif 'NoneType' in message:
            return 'Invalid input.'
        return message

    def parse_409_error(self, message):
        if 'Duplicate entry' in message:
            return 'Duplicate entry, already exists'
        elif 'a foreign key constraint fails' in message:
            return 'Item you trying to add no longer exists'
        return message
