from django.contrib.auth import authenticate
from rest_framework.authtoken.views import ObtainAuthToken
from ..managers import Authentication


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        user = authenticate(request)
        return Authentication().issue_auth_token(user)
