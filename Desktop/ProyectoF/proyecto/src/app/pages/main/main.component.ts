import { Component } from '@angular/core';
import { CarouselComponent } from '../../layout/carousel/carousel.component';
import { ButtonComponent } from '../../layout/button/button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarouselComponent, ButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
