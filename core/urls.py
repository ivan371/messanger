# -*- coding: utf-8 -*-
from django.conf.urls import url
from core.views import index

urlpatterns = [
    url(r'^', index, name='index'),
]