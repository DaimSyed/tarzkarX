from django.db import models
from model_utils.models import TimeStampedModel
from products.models import ProductColor,Product
from .order import Order

class OrderItemManager(models.Manager):
    def create(self, **obj_data):
        instance = super().create(**obj_data)
        instance.item_cost = instance.product.price
        instance.total_cost = instance.item_cost * instance.quantity
        p = Product.objects.filter(pk=instance.product.id)
        if p[0].stock < instance.quantity:
            raise Exception("Stock shortage for product " + str(p[0]))
        p.update(stock=instance.product.stock - instance.quantity)
        instance.save()
        return instance

class OrderItem(TimeStampedModel):
    order = models.ForeignKey(Order,related_name='order_items',on_delete=models.CASCADE,blank=False)
    product = models.ForeignKey(Product,on_delete=models.BLANK_CHOICE_DASH,blank=False)
    color = models.ForeignKey(ProductColor,on_delete=models.BLANK_CHOICE_DASH,blank=False)
    quantity = models.IntegerField(default=1)
    item_cost = models.IntegerField(default=0)
    total_cost = models.IntegerField(default=0)
    objects = OrderItemManager()

    def __str__(self):
        return "OrderID: {}, ItemID {}".format(self.order.id,self.id)