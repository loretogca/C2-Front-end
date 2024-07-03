import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbar,MatIcon,
    MatIconButton,MatButtonModule, 
    MatMenuModule, MatMenuItem],

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public userName:string='Juan Manuel';

  public changeName(){
    this.userName='Jorge';
  }
}