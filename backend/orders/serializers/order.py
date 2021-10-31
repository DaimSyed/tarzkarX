from rest_framework import serializers
from ..models import Order
from ..operations import OrderOperations, OrderItemOperations
from .order_item import OrderItemSerializer, OrderItemRequest
from  common.exceptions import APIError

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)
    items = OrderItemRequest(many=True, write_only=True,required=True)
    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        user = self.context.get('request').user

        items = validated_data.pop("items")
        if not user.is_anonymous:
            validated_data['user_id'] = user.id
        order = OrderOperations().create(validated_data)
        if not items:
            raise APIError("Order item bucket is empty")
        otp = 0
        for item in items:
            otp = otp + self.create_line_item(item,order.id).total_cost
        order.total_price = otp
        order.save()
        return order

    def create_line_item(self,item,order_id):
        item = dict(item)
        kwargs = item
        kwargs['order_id'] = order_id
        return OrderItemOperations().create(kwargs)
