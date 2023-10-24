from django.contrib import admin
from .models import Comunicado
from .models import Categoria

admin.site.register(Comunicado)
admin.site.register(Categoria)

class ComunicadosAdminSite(admin.AdminSite):
    site_header = 'Comunicados Administration'
    site_title = 'Comunicados Admin'
    index_title = 'Comunicados'

comunicados_admin_site = ComunicadosAdminSite(name='comunicadosadmin')

comunicados_admin_site.register(Comunicado)
# Register your models here.
