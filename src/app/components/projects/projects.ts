import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
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
      }
    });
  }

  openProjectModal() {
    this.showProjectModal = true;
    // Atualizar URL para compartilhamento
    this.router.navigate([], { fragment: 'pitch-detector' });
  }

  closeProjectModal() {
    this.showProjectModal = false;
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
