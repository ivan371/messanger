from django.contrib import admin

from message.models import ChatUser, Chat, Message


class MessageInline(admin.StackedInline):
    model = Message


class ChatUserInline(admin.StackedInline):
    model = ChatUser


@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    inlines = ChatUserInline, MessageInline
