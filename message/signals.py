from datetime import datetime
from django.db.models.signals import post_save
from message.models import Message, Chat


def update_chat(instance, created=None, *args, **kwargs):
    print(instance)
    if created:
        c = Chat.objects.get(id=instance.chat.id)
        c.updated = datetime.now()
        c.save()

post_save.connect(update_chat, sender=Message)
