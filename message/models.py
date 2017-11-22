from datetime import datetime
from django.db import models

from core.models import User


class Chat(models.Model):
    name = models.CharField(max_length=100)
    author = models.ForeignKey(User)
    is_private = models.BooleanField(default=True)
    updated = models.DateTimeField(default=datetime.now)
    
    
class Message(models.Model):
    text = models.TextField()
    author = models.ForeignKey(User)
    chat = models.ForeignKey(Chat)
  
    
class ChatUser(models.Model):
    chat = models.ForeignKey(Chat)
    user = models.ForeignKey(User)
