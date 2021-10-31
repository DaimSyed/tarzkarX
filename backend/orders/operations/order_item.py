from ..models import OrderItem


class OrderItemOperations:
    def __init__(self):
        self.model = OrderItem

    def get_all_queryset(self):
        return self.model.objects.all()

    def get_by_order_id(self, order_id):
        return self.model.objects.filter(order_id=order_id)

    def create(self, kwargs):
        return self.model.objects.create(**kwargs)