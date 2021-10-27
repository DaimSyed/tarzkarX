from common.exceptions import APIError
from user.operations import UserOperations
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.backends import ModelBackend


class CustomAuthenticationBackend(ModelBackend):
    def authenticate(self, request, **kwargs):

        email = request.data.get('email', '')
        password = request.data.get('password', '')
        try:
            user = UserOperations().get_by_email(email=email)
            if user.check_password(password):
                return user
        except ObjectDoesNotExist:
            pass
        raise APIError("Invalid email or password.", status_code=403)

    def get_user(self, _id):
        try:
            user = UserOperations().model.objects.get(id=_id)
            if user:
                return user
            return None
        except ObjectDoesNotExist:
            return None
