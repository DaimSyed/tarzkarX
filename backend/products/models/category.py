from django.db import models
from model_utils.models import TimeStampedModel


class ProductCategory(TimeStampedModel):
    name = models.CharField(max_length=128, blank=True)
