from datetime import datetime
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=11)
    avatar = models.ImageField(upload_to='avatars', blank=True, null=True)
    birth_date = models.DateField(default=datetime.now)
