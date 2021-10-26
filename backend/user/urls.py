from django.urls import path
from .views import *

urlpatterns = [
    path('login/', LoginView.as_view(), name="user-login"),
    path('users/', UserView.as_view(), name="user"),
    path('me/', MeView.as_view(), name="me"),
    path('signup/', SignUpView.as_view(), name="sign-up"),
    path('logout/', LogoutView.as_view(), name="user-logout")

]
