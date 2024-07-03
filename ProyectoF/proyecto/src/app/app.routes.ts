import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NgModule } from '@angular/core';

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

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
