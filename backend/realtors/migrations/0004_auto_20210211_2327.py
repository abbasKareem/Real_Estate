# Generated by Django 3.1.6 on 2021-02-11 21:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realtors', '0003_auto_20210211_2319'),
    ]

    operations = [
        migrations.AlterField(
            model_name='realtor',
            name='date_hired',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 2, 11, 23, 27, 39, 289795)),
        ),
    ]