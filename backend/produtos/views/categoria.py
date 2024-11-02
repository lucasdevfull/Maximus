from django.db import transaction, IntegrityError
from ..serializers import CategoriaSerializer
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView
from rest_framework import status
from ..models import Categoria


class CategoriaView(APIView):

    model = Categoria
    serializer = CategoriaSerializer

    def get(self, request: Request):
        categoria = self.model.objects.all()

        serializer = self.serializer(categoria, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request: Request) -> Response:
        serializer = self.serializer(data=request.data)
        if serializer.is_valid():
            categorias = serializer.validated_data.get('nome')
        try:
            Categoria.objects.create(nome=categorias)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception:
            return Response(
                {'error': 'Erro ao cadastrar a categoria.'},
                status=status.HTTP_400_BAD_REQUEST,
            )
