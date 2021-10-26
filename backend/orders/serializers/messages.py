from rest_framework import serializers
from ..models import Messages
from .user import UserSerializer



class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'