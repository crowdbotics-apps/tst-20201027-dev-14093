# Generated by Django 2.2.16 on 2020-11-10 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_load_initial_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='customtext',
            name='new_field',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
