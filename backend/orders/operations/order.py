from ..models import Order


class OrderOperations:
    def __init__(self):
        self.model = Order

    def get_all_queryset(self):
        return self.model.objects.all()

    def get_by_uid(self, uid):
        return self.model.objects.filter(user_id=uid)

    def get_by_fingerprint(self, fp):
        return self.model.objects.filter(fingerprint=fp)

    def get_by_id(self, id):
        return self.model.objects.get(id=id)

    def create(self, kwargs):
        return self.model.objects.create(**kwargs)