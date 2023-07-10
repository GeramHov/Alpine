import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMenu = false;
  showSearchBox = false;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  toggleSearchBox(){
    this.showSearchBox = !this.showSearchBox;
  }
}
