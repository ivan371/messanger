from __future__ import unicode_literals, absolute_import
from django.apps import AppConfig


class CoreConfig(AppConfig):
    name = 'core'

    def ready(self):
        from core.views import UserViewSet
