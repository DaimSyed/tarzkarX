from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from ..serializers import ProductSerializer
from ..operations import ProductOperations

class ProductView(APIView):
    parser_classes = (FormParser, MultiPartParser, JSONParser)

    def get(self, request, format=None):
        id = request.query_params.get('id', None)
        cat = request.query_params.get('category', None)
        if id:
            queryset = ProductOperations().get_by_kwargs({'id': id})
        elif cat:
            queryset = ProductOperations().get_by_kwargs({'category_id':cat})
        else:
            queryset = ProductOperations().get_all_queryset()
        serializer_class = ProductSerializer(queryset, many=True)
        return Response(serializer_class.data)
