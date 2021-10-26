from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from ..serializers import ProductSerializer
from ..operations import ProductOperations

class ProductView(APIView):
    parser_classes = (FormParser, MultiPartParser, JSONParser)

    def get(self, request, format=None):
        queryset = ProductOperations().get_all_queryset()
        serializer_class = ProductSerializer(queryset, many=True)
        return Response(serializer_class.data)
