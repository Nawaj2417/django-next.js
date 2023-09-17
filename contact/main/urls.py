from rest_framework.routers import DefaultRouter
from .views import AdmissionViewSet

router = DefaultRouter()
router.register(r'admissions', AdmissionViewSet)

urlpatterns = router.urls
