from django.db.transaction import atomic
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..serializers import OrderSerializer
from ..models import Orders


class OrderView(APIView):
    parser_classes = (FormParser, MultiPartParser, JSONParser)

    def get(self, request, format=None):
        user = request.user
        if not user.is_superuser:
            queryset = Orders.objects.filter(user_id = user.id).order_by('-created')
            serializer_class = OrderSerializer(queryset, many=True)
        else:
            queryset = Orders.objects.all().order_by('-created')
            serializer_class = OrderSerializer(queryset, many=True)
        print(queryset)
        return Response(serializer_class.data)

    @atomic
    def post(self, request, format=None):
        serializer = OrderSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @atomic
    def put(self, request, format=None):
        id = request.data.get('id', -1)
        stat = request.data.get('status')
        query = Orders.objects.get(id=id)
        query.status = stat
        query.save()

        serializer = OrderSerializer(query)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @atomic
    def delete(self, request):
        id = request.data.get('id', -1)
        Orders.objects.filter(id=id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)