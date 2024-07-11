import { RouterModule, Routes, provideRouter } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NgModule, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
    {
        path: '',
        component:MainComponent
    },
    {
        path: 'peliculas',
        component:PeliculasComponent
    },
    {
        path: 'series',
        component:SeriesComponent
    },
    {
        path: 'aboutus',
        component:AboutusComponent
    }
];

bootstrapApplication(AppComponent,{
    providers: [
        importProvidersFrom(HttpClient),
        provideRouter(routes),

    ],
})

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
