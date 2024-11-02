from ..serializers import FabricanteSerializer
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView
from rest_framework import status
from ..models import Fabricante


class FabricanteView(APIView):

    model = Fabricante
    serializer = FabricanteSerializer

    def get(self, request):

        fabricante = self.model.objects.all()
        serializer = self.serializer(fabricante, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request: Request) -> Response:

        serializer = self.serializer(data=request.data)
        if serializer.is_valid():
            fabricantes = serializer.validated_data.get('nome')
        try:
            Fabricante.objects.create(nome=fabricantes)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception:
            return Response(
                {'error': 'Erro ao casdatrar o fabricante.'},
                status=status.HTTP_400_BAD_REQUEST,
            )
