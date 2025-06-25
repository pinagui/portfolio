import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isHeaderVisible = true;
  private lastScrollTop = 0;

  ngOnInit() {
    // Header sempre visível no início
    this.isHeaderVisible = true;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
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
