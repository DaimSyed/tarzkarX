from ..models import ProductCategory


class CategoryOperations:
    def __init__(self):
        self.model = ProductCategory

    def get_all_queryset(self):
        return self.model.objects.all()

    def get_by_name(self, name):
        return self.model.objects.get(name=name)