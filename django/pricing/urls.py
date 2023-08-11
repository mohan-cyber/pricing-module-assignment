from django.urls import path
from . import views

urlpatterns = [
    path('api/pricing-configurations', views.PricingConfigListView.as_view(), name='pricing_config_list'),
    path('api/pricing-configurations/create', views.PricingConfigCreateView.as_view(), name='pricing_config_create'),
    path('api/pricing-configurations/<int:pk>', views.PricingConfigUpdateView.as_view(), name='pricing_config_update'),
    path('api/pricing-configurations/<int:pk>/delete', views.PricingConfigDeleteView.as_view(), name='pricing_config_delete'),
    path('api/calculate-pricing', views.CalculatePricingView.as_view(), name='calculate_pricing'),
]
