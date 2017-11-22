from django.shortcuts import render
from rest_framework import viewsets

from application.api import router
from core.models import User
from core.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

router.register(r'users', UserViewSet)


def index(request):
    return render(request, 'core/index.html')