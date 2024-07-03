import { Component } from '@angular/core';
import { ButtonComponent } from '../../layout/button/button.component';
import { CarouselComponent } from '../../layout/carousel/carousel.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [ButtonComponent, CarouselComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

}
