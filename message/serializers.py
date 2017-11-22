from rest_framework import serializers

from core.serializers import UserSerializer
from message.models import Message, ChatUser, Chat


class MessageSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    
    class Meta:
        model = Message
        fields = ('text', 'chat', 'author', 'id')


class ChatUserSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = ChatUser
        fields = ('user', 'id', 'chat')
        

class ChatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chat
        fields = ('name', 'id', 'is_private')

