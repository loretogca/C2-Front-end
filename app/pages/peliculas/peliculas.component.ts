import { Component } from '@angular/core';
import { CardpeliculasComponent } from '../../layout/cardpeliculas/cardpeliculas.component';


@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CardpeliculasComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent {

}
