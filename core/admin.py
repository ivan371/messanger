from django.contrib import admin

from core.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = (
        ('User info', {'fields': ('username', 'password', 'first_name', 'last_name', 'email', 'phone_number', 'avatar', 'birth_date')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'username',
                'password1',
                'password2',
                'email',
                'first_name',
                'last_name',
                'is_staff',
                'is_superuser',
                'avatar',
                'phone_number',
                'birth_date'),
        }),
    )

    def admin_avatar(self, instance):
        return instance.avatar and u'<img src="self.avatar" width="100px" />'.format(
            instance.avatar.url
        )
    admin_avatar.allow_tags = True
