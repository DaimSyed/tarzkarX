from rest_framework import serializers
from ..models import ProductColor


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductColor
        fields = '__all__'