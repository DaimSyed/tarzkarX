from django.db import models
from model_utils.models import TimeStampedModel
from .media import Media
from .color import ProductColor
from .category import ProductCategory


class Product(TimeStampedModel):
    images = models.ManyToManyField(Media,blank=True)
    colors = models.ManyToManyField(ProductColor,blank=True)
    category = models.ForeignKey(ProductCategory,on_delete=models.CASCADE,blank=False)
    price = models.IntegerField(default=0.0)
    name = models.CharField(max_length=32,blank=False)
    desc = models.CharField(max_length=1024, blank=True)
