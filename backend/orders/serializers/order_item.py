from rest_framework import serializers
from ..models import OrderItem

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderItemRequest(serializers.Serializer):
    product_id = serializers.IntegerField(required=True)
    color_id = serializers.IntegerField(required=True)
    quantity = serializers.IntegerField(required=True)