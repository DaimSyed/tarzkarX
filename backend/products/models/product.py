from django.db import models
from model_utils.models import TimeStampedModel
from .color import ProductColor
from .category import ProductCategory


class Product(TimeStampedModel):
    colors = models.ManyToManyField(ProductColor,blank=True)
    category = models.ForeignKey(ProductCategory,on_delete=models.CASCADE,blank=False)
    price = models.IntegerField(default=0.0)
    sku = models.CharField(max_length=32,blank=True,unique=True)
    stock = models.IntegerField(default=0)
    name = models.CharField(max_length=32,blank=False)
    desc = models.CharField(max_length=1024, blank=True)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return "{} - {} - {} - {} ({})".format(self.pk, self.name, self.desc,self.category.name, self.price)