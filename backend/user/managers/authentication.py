from rest_framework.views import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from user.managers import messages


class Authentication:
    def issue_auth_token(self, user):
        if user.is_active:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'is_super': user.is_superuser,
                'email': user.email,
                'name': user.first_name
            })
        else:
            return Response(messages.user_not_active, status=status.HTTP_403_FORBIDDEN)
