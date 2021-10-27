from rest_framework import serializers
from ..models import Product
from .category import CategorySerializer
from .media import MediaSerializer
from .color import ColorSerializer

class ProductSerializer(serializers.ModelSerializer):
    images = MediaSerializer(many=True)
    colors = ColorSerializer(many=True)
    category = CategorySerializer(many=False)
    class Meta:
        model = Product
        fields = '__all__'