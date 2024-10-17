import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgClass],
  template: `
    <header class="headerContainer">
      <div (click)="toggleMenu()" class="menuIcon">
        <img src="assets/header/menu-icon.svg" alt="Menu icon" />
      </div>

      <div class="containerLogo">
        <img src="assets/header/skandia-logo.svg" alt="Skandia logo" />
        <span class="separadorLogo"><strong>|</strong></span>
        <span>Plan Financiero Digital - FPX</span>
      </div>

      <div class="containerMenu">
        <div>
          <img
            src="assets/header/happy-icon.svg"
            alt="Happy icon"
            class="icon"
          />
          <a href="#">Tu Financial Planner</a>
        </div>

        <div>
          <img
            src="assets/header/aportes-icon.svg"
            alt="Aportes icon"
            class="icon"
          />
          <a href="#">Aportes</a>
        </div>

        <div (mouseenter)="showHelp()" (mouseleave)="hideHelp()">
          <img
            src="assets/header/account-circle-icon.svg"
            alt="Happy icon"
            class="icon"
          />
          <a href="#" [ngClass]="{ visible: isShowHelp, hidden: !isShowHelp }"
            >Preguntas <br />
            Frecuentes</a
          >
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isShowHelp = false;
  menuOpen = false;

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
