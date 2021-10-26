from django.urls import path
from .views import *

urlpatterns = [
    path('category/', CategoryView.as_view(), name="products-category"),
    path('product/', ProductView.as_view(), name='products'),
]
