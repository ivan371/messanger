from django.apps import AppConfig


class MessageConfig(AppConfig):
    name = 'message'

    def ready(self):
        from message.views import ChatViewSet, MessageViewSet
        from message import signals