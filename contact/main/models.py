from django.db import models

# Create your models here.
class Admission(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    # roll_no = models.IntegerField()
    # age = models.IntegerField()
    # dob = models.IntegerField()
    # address = models.TextField()
    # classes = models.IntegerField()
    # year = models.IntegerField()
    # registration = models.IntegerField()
    # father = models.CharField(max_length=100)
    # mother = models.CharField(max_length=100)
    # mobile = models.IntegerField()
    # email = models.EmailField()
    # gender = models.Text