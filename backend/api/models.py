from django.db import models


# Create your models here.

class Productos(models.Model):
    name = models.CharField(max_length=30)
    price = models.CharField(max_length=30)