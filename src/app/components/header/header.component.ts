import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgClass],
  template: `
    <header class="headerContainer">
      <div (click)="toggleMenu()" class="menuIcon">
          <img src="assets/header/menu-icon.svg" alt="Menu icon">
      </div>

      <div class="headerContainerSegundario">
        <div class="containerLogo">
        <img src="assets/header/skandia-logo.svg" alt="Skandia logo">
        <span class="separadorLogo"><strong>|</strong></span>
        <span>Plan Financiero Digital - FPX</span>
      </div>

      <div class="rightMenu">
        <div (click)="openFinancialPlanner()">
          <img src="assets/header/happy-icon.svg" alt="Happy icon" class="icon">
          <a href="#">Tu Financial Planner</a>
        </div>

        <div (click)="openContributions()">
          <img src="assets/header/aportes-icon.svg" alt="Aportes icon" class="icon">
         <a href="#">Aportes</a>
        </div>

        <div (mouseenter)="showHelp()" (mouseleave)="hideHelp()">
          <img src="assets/header/account-circle-icon.svg" alt="Happy icon" class="icon" >
          <a href="#" [ngClass]="{ 'visible': isShowHelp, 'hidden': !isShowHelp }">Preguntas <br> Frecuentes</a>
          <!-- pendiente el enalce debe aparacer cuando se haga hover en la imagen -->
        </div>
      </div>

      </div>
    </header>
    <nav *ngIf="isMenuOpen" class="menu">
      <ul>
        <li>Inicio</li>
        <li>Contratos</li>
        <li>Acciones</li>
        <li>Herramientas</li>
        <li>Servicio al cliente</li>
      </ul>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  isMenuOpen = false;
  isShowHelp = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  openFinancialPlanner() {
    console.log('Abriendo Financial Planner');
    // Aquí iría la lógica para abrir el Financial Planner
  }

  openContributions() {
    console.log('Abriendo Aportes');
    // Aquí iría la lógica para abrir la sección de Aportes
  }

  showHelp() {
    this.isShowHelp = true;
  }

  hideHelp() {
    this.isShowHelp = false;
  }
}