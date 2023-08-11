from django.db import models
from django.contrib.auth.models import User

class PricingConfig(models.Model):
    DAY_CHOICES = [
        ('Mon', 'Monday'),
        ('Tue', 'Tuesday'),
        ('Wed', 'Wednesday'),
        ('Thu', 'Thursday'),
        ('Fri', 'Friday'),
        ('Sat', 'Saturday'),
        ('Sun', 'Sunday'),
    ]

    day_of_week = models.CharField(max_length=3, choices=DAY_CHOICES)
    distance_base_price = models.DecimalField(max_digits=6, decimal_places=2)
    distance_additional_price = models.DecimalField(max_digits=6, decimal_places=2)
    time_multiplier_factor = models.DecimalField(max_digits=6, decimal_places=2)
    waiting_charges = models.DecimalField(max_digits=6, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class UserActionLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    action = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

