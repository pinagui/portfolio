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
    // Verificar se deve abrir o modal baseado na URL
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'pitch-detector') {
        this.showProjectModal = true;
        this.disableBodyScroll();
      }
    });
  }

  ngOnDestroy() {
    // Garantir que o scroll seja restaurado se o componente for destruído
    this.enableBodyScroll();
  }

  private disableBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  private enableBodyScroll() {
    document.body.style.overflow = '';
  }

  openProjectModal() {
    this.showProjectModal = true;
    this.disableBodyScroll();
    // Atualizar URL para compartilhamento
    this.router.navigate([], { fragment: 'pitch-detector' });
  }

  closeProjectModal() {
    this.showProjectModal = false;
    this.enableBodyScroll();
    // Remover fragment da URL
    this.router.navigate([], { fragment: undefined });
  }

  openGithub() {
    window.open('https://github.com/pinagui/sing-pitch-project', '_blank');
  }

  openLiveDemo() {
    window.open('https://sing-pitch-project.vercel.app/', '_blank');
  }
}
