from django.urls import path
from .views import *

urlpatterns = [
    path('oph/', OrderView.as_view(), name="orders"),
]
