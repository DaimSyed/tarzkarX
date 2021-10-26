from ..models import Product


class ProductOperations:
    def __init__(self):
        self.model = Product

    def get_all_queryset(self):
        return self.model.objects.all()

    def get_by_category(self, name):
        return self.model.objects.get(name=name)