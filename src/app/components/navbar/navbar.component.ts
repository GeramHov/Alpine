import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showMenu: boolean = false;
  showSearchBox: boolean = false;

  toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }

  toggleSearchBox(): void {
    this.showSearchBox = !this.showSearchBox;
  }
}
