from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Productos
from api.serializers import ProductosSerializer, RegisterSerializer, MeSerializer

class ProductosViewSet(viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    queryset = Productos.objects.all()

        ############ FILTROS ############
class ProductosFilterViewSet(viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    queryset = Productos.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        name = self.request.query_params.get('name')
        if name is not None:
            queryset = queryset.filter(name=name)
        return queryset
        ############ FILTROS ############

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)