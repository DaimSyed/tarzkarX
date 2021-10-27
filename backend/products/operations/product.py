from ..models import Product


class ProductOperations:
    def __init__(self):
        self.model = Product

    def get_all_queryset(self):
        return self.model.objects.all()

    def get_by_kwargs(self, kwargs):
        return self.model.objects.filter(**kwargs)

    def get_by_id(self, id):
        return self.model.objects.get(id=id)