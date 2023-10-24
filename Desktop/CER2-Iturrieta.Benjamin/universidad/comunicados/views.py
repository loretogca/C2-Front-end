from django.shortcuts import render, redirect, get_object_or_404
from .models import Comunicado, Categoria
from .forms import ComunicadoForm
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.utils import timezone
from django.http import HttpResponse
from django.urls import reverse
from django.shortcuts import redirect

def listar_comunicados(request):

    comunicados = Comunicado.objects.all()
    tipo = request.GET.get('tipo')
    categoria_id = request.GET.get('categoria')
    if tipo:
        comunicados = comunicados.filter(tipo=tipo)

    if categoria_id:
        categoria = Categoria.objects.get(id=categoria_id)
        comunicados = comunicados.filter(categoria=categoria)

    categorias = Categoria.objects.all()

    context = {
        'comunicados': comunicados,
        'categorias': categorias,
    }
    return render(request, 'comunicados/listar_comunicados.html', context)


@login_required
def registrar_comunicado(request):

    fecha_actual = timezone.now().date()
    
    if request.method == 'POST':
        form = ComunicadoForm(request.POST)
        if form.is_valid():
            comunicado = form.save(commit=False)
            comunicado.publicado_por = request.user
            comunicado.save()
            messages.success(request, 'Comunicado registrado exitosamente.')
            return redirect('listar_comunicados')
    else:
        form = ComunicadoForm()
    
    context = {
        'fecha_actual': fecha_actual,
        'form': form,
    }
    return render(request, 'comunicados/registrar_comunicado.html', context)

@login_required
def editar_comunicado(request, comunicado_id):
    comunicado = get_object_or_404(Comunicado, id=comunicado_id)
    if request.method == 'POST':
        form = ComunicadoForm(request.POST, instance=comunicado)
        if form.is_valid():
            form.save()
    else:
        form = ComunicadoForm(instance=comunicado)
    
    context = {'form': form}
    return render(request, 'comunicados/editar_comunicado.html', context)