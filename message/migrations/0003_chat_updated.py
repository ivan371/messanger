# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-21 11:42
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('message', '0002_auto_20171117_1426'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='updated',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
