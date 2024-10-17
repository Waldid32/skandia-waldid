import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgClass],
  template: `
    <header class="header-container">
      <button (click)="toggleMenu()" class="menu-icon" aria-label="Abrir menú">
        <img src="assets/header/menu-icon.svg" alt="Ícono de menú" />
      </button>

      <div class="container-logo">
        <img src="assets/header/skandia-logo.svg" alt="Logo de Skandia" />
        <span class="separador-logo"><strong>|</strong></span>
        <span>Plan Financiero Digital - FPX</span>
      </div>

      <nav class="container-menu" aria-label="Menú principal">
        <div>
          <img
            src="assets/header/happy-icon.svg"
            alt="Ícono de tu Financial Planner"
            class="icon"
          />
          <a href="#">Tu Financial Planner</a>
        </div>

        <div>
          <img
            src="assets/header/aportes-icon.svg"
            alt="Ícono de aportes"
            class="icon"
          />
          <a href="#">Aportes</a>
        </div>

        <div (mouseenter)="showHelp()" (mouseleave)="hideHelp()">
          <img
            src="assets/header/account-circle-icon.svg"
            alt="Ícono de preguntas frecuentes"
            class="icon"
          />
          <a href="#" [ngClass]="{ visible: isShowHelp, hidden: !isShowHelp }"
            >Preguntas <br />
            Frecuentes</a
          >
        </div>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isShowHelp = false;

  constructor(private menuService: MenuService) {}

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  showHelp() {
    this.isShowHelp = true;
  }

  hideHelp() {
    this.isShowHelp = false;
  }
}
