from rest_framework import serializers
from ..models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            'password': {
                'write_only': True,
            }
        }

    def create(self, validated_data):
        validated_data['is_superuser'] = False
        user = super().create(validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user