# Generated by Django 3.1.6 on 2021-02-11 19:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realtors', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='realtor',
            name='date_hired',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 2, 11, 21, 5, 20, 495399)),
        ),
    ]
