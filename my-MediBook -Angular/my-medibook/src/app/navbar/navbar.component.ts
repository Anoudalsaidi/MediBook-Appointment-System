import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isDark: boolean = false;

  ngOnInit(): void {
    const mode = localStorage.getItem('darkMode');

    this.isDark = mode === 'on';

    if (this.isDark) {
      document.body.classList.add('dark');
    }
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;

    document.body.classList.toggle('dark');

    localStorage.setItem('darkMode', this.isDark ? 'on' : 'off');
  }
}