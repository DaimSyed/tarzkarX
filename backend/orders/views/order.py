from django.db.transaction import atomic
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..operations import OrderOperations
from ..serializers import OrderSerializer

class OrderView(APIView):
    parser_classes = (FormParser, MultiPartParser, JSONParser)

    def get(self, request, format=None):
        user = request.user
        if user.is_anonymous:
            return Response([])
        else:
            queryset = OrderOperations().get_by_uid(user_id = user.id).order_by('-created')
            serializer_class = OrderSerializer(queryset, many=True)
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
        query = OrderOperations().get_by_id(id=id)
        query.status = stat
        query.save()
        serializer = OrderSerializer(query)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @atomic
    def delete(self, request):
        id = request.data.get('id', -1)
        OrderOperations().get_by_id(id=id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)