from django.shortcuts import render
from rest_framework import viewsets
from .models import Admission
from .serializers import AdmissionSerializer
# Create your views here.


class AdmissionViewSet(viewsets.ModelViewSet):
    queryset = Admission.objects.all()
    serializer_class = AdmissionSerializer
