from django.contrib import admin
import csv
from django.http import HttpResponse
from django.utils.text import slugify
from .models import PricingConfig, UserActionLog

def export_selected_to_csv(modeladmin, request, queryset):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = f'attachment; filename={slugify(modeladmin.model.__name__)}.csv'

    writer = csv.writer(response)
    fields = [field.name for field in modeladmin.model._meta.fields]
    writer.writerow(fields)

    for obj in queryset:
        writer.writerow([getattr(obj, field) for field in fields])

    return response

export_selected_to_csv.short_description = "Export selected entries as CSV"

class PricingConfigAdmin(admin.ModelAdmin):
    actions = [export_selected_to_csv]
    list_display = ('day_of_week', 'distance_base_price', 'distance_additional_price', 'time_multiplier_factor', 'waiting_charges', 'created_at', 'updated_at')
    list_filter = ('day_of_week',)
    search_fields = ('day_of_week',)

admin.site.register(PricingConfig, PricingConfigAdmin)

class UserActionLogAdmin(admin.ModelAdmin):
    list_display = ('user', 'action', 'timestamp')

admin.site.register(UserActionLog, UserActionLogAdmin)