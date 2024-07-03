import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ButtonComponent } from './layout/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, NavbarComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto';
}
