from rest_framework import serializers
from ..models import Orders
from .user import UserSerializer



class OrderSerializer(serializers.ModelSerializer):
    user = serializers.IntegerField(required=False,write_only=True)
    user_info = UserSerializer(source='user', read_only=True)
    class Meta:
        model = Orders
        fields = '__all__'

    def create(self, validated_data):
        id = self.context['request'].user.id
        print(validated_data)
        validated_data['user_id'] = id
        return Orders.objects.create(**validated_data)