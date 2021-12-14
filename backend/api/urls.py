from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import ProductosViewSet, RegisterView, ProductosFilterViewSet, me

router = routers.DefaultRouter()
router.register(r'productos', ProductosViewSet)
router.register(r'productos_filter', ProductosFilterViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view()),
    path('me/', me)
]