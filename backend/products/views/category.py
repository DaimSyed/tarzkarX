from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from ..serializers import CategorySerializer
from ..operations import CategoryOperations

class CategoryView(APIView):
    parser_classes = (FormParser, MultiPartParser, JSONParser)

    def get(self, request, format=None):
        queryset = CategoryOperations().get_all_queryset()
        serializer_class = CategorySerializer(queryset, many=True)
        return Response(serializer_class.data)
