from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from django.db import transaction, IntegrityError
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.permissions import IsAuthenticated
from ..serializers import ProdutoSerializer
from ..models import Produto


class ProdutoListView(APIView):

    permission_classes = [IsAuthenticated]
    parser_classes = [JSONParser]
    model = Produto
    serializer = ProdutoSerializer

    def get(self, request: Request) -> Response:
        fabricante = request.query_params.get('fabricante')
        categoria = request.query_params.get('categoria')
        produtos = self.model.objects.all()

        if categoria:
            produtos = produtos.filter(categoria_id=int(categoria))

        if fabricante:
            produtos = produtos.filter(fabricante_id=int(fabricante))

        serializer = self.serializer(produtos, many=True)
        return Response(serializer.data)


class ProdutoView(APIView):

    parser_classes = [JSONParser]
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    model = Produto
    serializer = ProdutoSerializer
    def get(self, request: Request) -> Response:
        produtos = self.model.objects.all()

        serializer = self.serializer(produtos, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request: Request) -> Response:

        serializer = self.serializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(
                    serializer.data, status=status.HTTP_201_CREATED
                )
            except IntegrityError as e:
                return Response(
                    {'message': f'Erro ao enviar o cadastro. motivo {e}'},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProdutoDetailsView(APIView):

    model = Produto
    serializer = ProdutoSerializer
    def get(self, request, id):
        produto = get_object_or_404(self.model, id=id)
        serializer = self.serializer(produto)
        if serializer is not None:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'message': 'error'})

    def put(self, request: Request, id) -> Response:
        produto = get_object_or_404(self.model, id=id)
        serializer = self.serializer(produto, data=request.data)
        if serializer.is_valid():
            response = self.serializer(serializer.save())
            return Response(response.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: Request, id) -> Response:
        produto = self.model.objects.get(id=id)
        produto.delete()
        return Response(
            {'message': 'Produto deletado com sucesso!'},
            status=status.HTTP_204_NO_CONTENT,
        )
