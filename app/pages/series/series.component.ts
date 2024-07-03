import { Component } from '@angular/core';
import { CardComponent } from '../../layout/card/card.component';
import { ButtonComponent } from '../../layout/button/button.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {

}
