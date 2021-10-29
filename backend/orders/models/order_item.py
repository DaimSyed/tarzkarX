from django.db import models
from model_utils.models import TimeStampedModel
from products.models import ProductColor,Product
from .order import Order

class OrderItem(TimeStampedModel):
    order = models.ForeignKey(Order,on_delete=models.CASCADE,blank=False)
    product = models.ForeignKey(Product,on_delete=models.BLANK_CHOICE_DASH,blank=False)
    color = models.ForeignKey(ProductColor,on_delete=models.BLANK_CHOICE_DASH,blank=False)
    quantity = models.IntegerField(default=1)
    item_cost = models.IntegerField(default=0)
    total_cost = models.IntegerField(default=0)
