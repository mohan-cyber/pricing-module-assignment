from rest_framework import serializers
from .models import PricingConfig

class PricingConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = PricingConfig
        fields = '__all__'

class CalculatePricingSerializer(serializers.Serializer):
    additional_distance = serializers.FloatField(required=True, min_value=0)
    total_time = serializers.FloatField(required=True, min_value=0)