from django.db import models
from model_utils.models import TimeStampedModel
from user.models import User


class Order(TimeStampedModel):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('In Progress', 'In Progress'),
        ('Cancelled', 'Cancelled'),
        ('Delivered', 'Delivered')
    ]
    user = models.ForeignKey(User,on_delete=models.CASCADE,blank=True)
    total_price = models.IntegerField(default=0.0)
    address = models.CharField(max_length=1024)
    city = models.CharField(max_length=64)
    zip = models.CharField(max_length=32)
    note = models.CharField(max_length=1024, blank=True)
    contact = models.CharField(max_length=32)
    status = models.CharField(max_length=64,choices=STATUS_CHOICES,default="Pending")

