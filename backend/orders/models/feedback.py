from django.db import models
from model_utils.models import TimeStampedModel
from .user import User


class FeedBack(TimeStampedModel):
    email = models.CharField(max_length=8024, blank=True)
    username = models.CharField(max_length=256, blank=True)
    feedback = models.CharField(max_length=8024, blank=True)
