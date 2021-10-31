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
    user = models.ForeignKey(User,on_delete=models.CASCADE,blank=True,null=True)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    street1 = models.CharField(max_length=1024)
    street2 = models.CharField(max_length=1024,blank=True,null=True)
    city = models.CharField(max_length=64)
    zip = models.CharField(max_length=32)
    contact = models.CharField(max_length=32)
    note = models.CharField(max_length=1024, blank=True)

    status = models.CharField(max_length=64,choices=STATUS_CHOICES,default="Pending")
    shipping_date = models.DateTimeField(blank=True, null=True)
    delivery_date = models.DateTimeField(blank=True,null=True)
    total_price = models.IntegerField(default=0.0)

    fingerprint = models.CharField(max_length=1024,blank=True,null=True)


    def __str__(self):
        return "{} - {} {} ({})".format(self.id, self.firstname, self.lastname, self.status)
