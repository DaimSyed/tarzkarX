from django.db import models
from model_utils.models import TimeStampedModel
from .product import Product

class Media(TimeStampedModel):
    product = models.ForeignKey(Product,related_name='images',on_delete=models.CASCADE)
    desc = models.CharField(blank=True,max_length=128)
    image = models.ImageField(blank=False,upload_to='product/media/')

    def __str__(self):
        return "{} {}".format(self.pk, self.desc)
