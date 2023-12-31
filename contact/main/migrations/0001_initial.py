# Generated by Django 4.2.4 on 2023-08-24 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Admission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('id1', models.IntegerField()),
                ('age', models.IntegerField()),
                ('dob', models.IntegerField()),
                ('address', models.TextField()),
                ('father', models.CharField(max_length=100)),
                ('mother', models.CharField(max_length=100)),
                ('mobile', models.IntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('gender', models.TextField()),
            ],
        ),
    ]
