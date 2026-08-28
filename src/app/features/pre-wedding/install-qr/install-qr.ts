import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-install-qr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './install-qr.html',
  styleUrls: ['./install-qr.css']
})
export class InstallQr implements OnInit {
  deferredPrompt: any = null;
  isStandalone: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verifica se a app já está a correr em modo PWA instalado
    this.isStandalone = window.matchMedia('(display-mode: standalone)').matches 
      || (navigator as any).standalone 
      || false;
  }

  // Captura o evento nativo do browser para guardar o prompt de instalação
  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(e: Event) {
    e.preventDefault();
    this.deferredPrompt = e;
  }

  // Ação ao clicar no botão de Download / Instalação
  installPwa(): void {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Utilizador aceitou a instalação');
        }
        this.deferredPrompt = null;
      });
    } else {
      // Caso o utilizador esteja no iOS ou o prompt não esteja disponível, avança no fluxo
      this.advanceToLogin();
    }
  }

  advanceToLogin(): void {
    this.router.navigate(['/rsvp']);
  }
}