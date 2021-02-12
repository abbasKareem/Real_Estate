from django.contrib import admin
from .models import Cotanct


class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'subject')
    list_display_links = ('id', 'name')
    search_fields = ('name', 'email', 'subjcect')
    list_per_page = 25


admin.site.register(Cotanct, ContactAdmin)
