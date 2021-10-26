import traceback
from django.http import JsonResponse
from django.utils.deprecation import MiddlewareMixin
from django.conf import settings
from rest_framework.exceptions import APIException

from ..exceptions import ExceptionParser


class ExceptionHandlerMiddleware(MiddlewareMixin, APIException):
    def process_exception(self, request, exception):
        exception_dict, status = ExceptionParser().parse(exception, request)
        if settings.DEBUG:
            traceback.print_exc()
        return JsonResponse(exception_dict, status=status, safe=False)
