from django.db import models
from model_utils.models import TimeStampedModel


class ProductCategory(TimeStampedModel):
    name = models.CharField(max_length=128, blank=True)
    image = models.ImageField(blank=True, null=True, upload_to='product/category/img')
    icon = models.ImageField(blank=True, null=True, upload_to='product/category/icon')

    def __str__(self):
        return "{}".format(self.name)
