from rest_framework import serializers
from ..models import FeedBack
from .user import UserSerializer



class FeedBackSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedBack
        fields = '__all__'