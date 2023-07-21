import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  disclaimer: boolean = false;
  alpineBtn!: HTMLElement | null;

  toggleDisclaimer(): void {
    this.disclaimer = !this.disclaimer;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
