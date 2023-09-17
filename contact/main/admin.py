from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Admission

class AdmissionAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')
    # list_filter = ('age', 'gender')
    search_fields = ('first_name', 'last_name')

admin.site.register(Admission, AdmissionAdmin)
