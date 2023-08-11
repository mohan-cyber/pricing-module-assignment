from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated ,AllowAny
from rest_framework import status
from .models import PricingConfig, UserActionLog
from .serializers import PricingConfigSerializer, CalculatePricingSerializer


class PricingConfigListView(APIView):
    def get(self, request):
        queryset = PricingConfig.objects.all()
        serializer = PricingConfigSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PricingConfigCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PricingConfigSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = self.request.user
            action = f"Created pricing configuration: {serializer.data['day_of_week']}"
            UserActionLog.objects.create(user=user, action=action)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PricingConfigDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        pricing_config = PricingConfig.objects.get(pk=pk)
        user = self.request.user
        action = f"Deleted pricing configuration: {pricing_config.day_of_week}"
        UserActionLog.objects.create(user=user, action=action)
        pricing_config.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class PricingConfigUpdateView(APIView):
    permission_classes = [IsAuthenticated]


    def put(self, request, pk):
        instance = self.get_object(pk)
        if not instance:
            return Response({"error": "Pricing configuration not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = PricingConfigSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = self.request.user
            action = f"Updated pricing configuration: {instance.day_of_week}"
            UserActionLog.objects.create(user=user, action=action)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CalculatePricingView(APIView):
    def post(self, request):
        serializer = CalculatePricingSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        validated_data = serializer.validated_data
        additional_distance = validated_data['additional_distance']
        total_time = validated_data['total_time']
        distance_base_price = 80
        distance_additional_price = 30
        waiting_charges = 5

        if total_time <= 60:
            time_multiplier_factor = 1.0
        elif 60 < total_time <= 120:
            time_multiplier_factor = 1.25
        else:
            time_multiplier_factor = 2.2

        price = (distance_base_price + (additional_distance * distance_additional_price)) + \
                (total_time * time_multiplier_factor) + waiting_charges

        return Response({'price': price}, status=status.HTTP_200_OK)

