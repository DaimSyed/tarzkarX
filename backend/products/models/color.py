from django.db import models
from model_utils.models import TimeStampedModel


class ProductColor(TimeStampedModel):
    name = models.CharField(max_length=64, blank=True)
    color = models.CharField(max_length=16, blank=True)

    def __str__(self):
        return "{} {}".format(self.name, self.color)
