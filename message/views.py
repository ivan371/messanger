from rest_framework import viewsets

from application.api import router
from message.models import Chat, Message, ChatUser
from message.serializers import ChatSerializer, MessageSerializer, ChatUserSerializer


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    def get_queryset(self):
        queryset = super(ChatViewSet, self).get_queryset()
        return queryset.order_by('-updated')
    
    
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    def get_queryset(self):
        queryset = super(MessageViewSet, self).get_queryset()
        if 'chat' in self.request.query_params:
            if self.request.query_params['chat'].isdigit():
                queryset = queryset.filter(chat=self.request.query_params['chat'])
                return queryset
        return queryset.filter(chat=0)
    
    
class ChatUserViewSet(viewsets.ModelViewSet):
    queryset = ChatUser.objects.all()
    serializer_class = ChatUserSerializer
    
    def get_queryset(self):
        queryset = super(ChatUserViewSet, self).get_queryset()
        if 'chat' in self.request.query_params:
            if self.request.query_params['chat'].isdigit():
                queryset = queryset.filter(chat=self.request.query_params['chat'])
                return queryset
        return queryset.filter(chat=0)


router.register(r'chats', ChatViewSet)
router.register(r'message', MessageViewSet)
router.register(r'chatuser', ChatUserViewSet)