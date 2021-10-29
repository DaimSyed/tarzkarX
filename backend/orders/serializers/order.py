from rest_framework import serializers
from ..models import Order
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

    # def create(self, validated_data):
    #     id = self.context['request'].user.id
    #     validated_data['user_id'] = id
    #     return Orders.objects.create(**validated_data)