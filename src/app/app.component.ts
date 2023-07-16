import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Alpine';
  toTopBtn!: HTMLElement | null;

  ngOnInit(): void {
    this.toTopBtn = document.getElementById('totop');
    if (this.toTopBtn) {
      this.scrollToTop();
    }
  }

  scrollToTop() {
    if (this.toTopBtn) {
      this.toTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
          this.toTopBtn!.style.display = 'none';
        } else {
          this.toTopBtn!.style.display = 'block';
        }
      });
    }
  }
}
