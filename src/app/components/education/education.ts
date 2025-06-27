import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent {
  showCertificateModal = false;

  openCertificateModal() {
    this.showCertificateModal = true;
  }

  closeCertificateModal() {
    this.showCertificateModal = false;
  }
} 