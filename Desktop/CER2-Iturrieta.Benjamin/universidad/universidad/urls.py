from django.contrib import admin
from django.urls import path, include
from comunicados import views
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required
from comunicados.admin import comunicados_admin_site


admin.site.login = login_required(admin.site.login)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.listar_comunicados, name='listar_comunicados'),
    path('admin/listar_comunicados/', views.listar_comunicados, name='admin_listar_comunicados'),
    path('registrar_comunicado/', views.registrar_comunicado, name='registrar_comunicado'),
    path('editar_comunicado/<int:comunicado_id>/', views.editar_comunicado, name='editar_comunicado'),
    path('accounts/login/', auth_views.LoginView.as_view(template_name='comunicados/login.html'), name='login'), 
    path('accounst/logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('comunicadosadmin/', comunicados_admin_site.urls),
]

