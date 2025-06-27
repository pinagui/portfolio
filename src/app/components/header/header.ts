import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isHeaderVisible = true;
  isDarkMode = false;
  private lastScrollTop = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Header sempre visível no início
    this.isHeaderVisible = true;
    
    // Verificar se há preferência salva no localStorage apenas no browser
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark');
      } else {
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark');
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      // Scrolling down - hide header
      this.isHeaderVisible = false;
    } else {
      // Scrolling up - show header
      this.isHeaderVisible = true;
    }
    
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMenu();
    }
  }
}
