# Generated by Django 5.0.3 on 2024-04-14 18:08

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0008_delete_customuser'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='liked_by',
            field=models.ManyToManyField(blank=True, related_name='liked_recipes', to=settings.AUTH_USER_MODEL),
        ),
    ]
