from django import forms
from .models import Comunicado
from django.utils import timezone


class ComunicadoForm(forms.ModelForm):

    def clean(self):
        cleaned_data = super().clean()

        cleaned_data['fecha_envio'] = timezone.now().date()

        return cleaned_data

    class Meta:
        model = Comunicado
        fields = ['titulo', 'detalle', 'categoria', 'tipo']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        tipo_choices = Comunicado.TIPO_CHOICES
        self.fields['tipo'] = forms.ChoiceField(choices=tipo_choices)