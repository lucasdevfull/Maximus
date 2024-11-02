from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.request import Request
from ..serializers import LoginSerializer
from rest_framework.views import APIView
from rest_framework import status


class LoginAPIView(APIView):

    permission_classes = [AllowAny]
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    model = Token
    serializer = LoginSerializer
    
    def post(self, request: Request) -> Response:
        serializer = self.serializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data.get('username')
            password = serializer.validated_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                token, created = self.model.objects.get_or_create(user=user)

                return Response(
                    {'success': 'Logado com sucesso', 'token': token.key},
                    status=status.HTTP_200_OK,
                )
            return Response(
                {'error': 'Credenciais inválidas'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request: Request) -> Response:
        return Response(
            {'detail': 'Método não permitido'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED,
        )
