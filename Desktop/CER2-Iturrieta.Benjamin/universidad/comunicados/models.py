from django.db import models
from django.contrib.auth.models import User
class Categoria(models.Model):
    nombre = models.TextField()
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Comunicado(models.Model):

    TIPO_CHOICES = [
        ("DEP", "Departamentos"),
        ("DIR", "Direcciones"),
        ("SEC", "Secretarías"),
        ("FED", "Federaciones"),
    ]

    correlativo = models.AutoField(primary_key=True)
    titulo = models.TextField()
    detalle = models.TextField()
    tipo = models.CharField(max_length=3, choices=TIPO_CHOICES)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    fecha_envio = models.DateTimeField(auto_now_add=True)
    fecha_ultima_modificacion = models.DateTimeField(auto_now=True)
    publicado_por = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo