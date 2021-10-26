from django.db.transaction import atomic
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..serializers import MessagesSerializer
from ..models import Messages


class MessagesView(APIView):
    parser_classes = (FormParser, MultiPartParser, JSONParser)

    def get(self, request, format=None):
        queryset = Messages.objects.all().order_by('-created')
        serializer_class = MessagesSerializer(queryset, many=True)
        return Response(serializer_class.data)

    @atomic
    def post(self, request, format=None):
        serializer = MessagesSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @atomic
    def delete(self, request):
        id = request.query_params.get("id")
        Messages.objects.filter(id=id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)