import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit, OnDestroy {
  showProjectModal = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Verificar se deve rolar para a seção de projetos baseado na URL
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'pitch-detector' || fragment === 'meusprojetos') {
        // Rolar para a seção de projetos
        setTimeout(() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    });
  }

  ngOnDestroy() {
    // Garantir que o scroll seja restaurado se o componente for destruído
    this.enableBodyScroll();
  }

  private disableBodyScroll() {
    // Impedir scroll no body e no html
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Para mobile - adicionar position fixed para prevenir scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
  }

  private enableBodyScroll() {
    // Restaurar estilos originais
    const scrollY = document.body.style.top;
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // Restaurar posição do scroll
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }

  openProjectModal() {
    this.showProjectModal = true;
    this.disableBodyScroll();
  }

  closeProjectModal() {
    this.showProjectModal = false;
    this.enableBodyScroll();
  }

  openGithub() {
    window.open('https://github.com/pinagui/sing-pitch-project', '_blank');
  }

  openLiveDemo() {
    window.open('https://sing-pitch-project.vercel.app/', '_blank');
  }
}
