from rest_framework import serializers
from .models import Cotanct


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cotanct
        fields = '__all__'
