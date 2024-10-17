import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-subMenu',
  standalone: true,
  imports: [NgIf, NgClass, NgFor],
  template: `
    <div class="subMenuContainer" [ngClass]="{ collapsed: !isExpanded }">
      <!-- Ícono de home que controla el estado del menú -->
      <div class="menu-header" (click)="toggleMenu()">
        <div>
          <img src="assets/subMenu/home.svg" alt="Home" class="icon" />
          <span *ngIf="isExpanded" class="textHome">Inicio</span>
        </div>
      </div>

      <!-- Opciones del menú -->
      <div class="menu-item" *ngFor="let item of menuItems">
        <img
          [src]="item.icon"
          alt="{{ item.label }}"
          class="icon"
          *ngIf="isExpanded"
        />
        <span *ngIf="isExpanded">{{ item.label }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./subMenu.component.scss'],
})
export class SubMenuComponent {
  isExpanded = false;

  menuItems = [
    { label: 'Contratos', icon: 'assets/subMenu/hoja1.svg' },
    { label: 'Acciones', icon: 'assets/subMenu/tool.svg' },
    { label: 'Objetivos', icon: 'assets/subMenu/star.svg' },
    { label: 'Herramientas', icon: 'assets/subMenu/money.svg' },
    {
      label: 'Servicio al cliente',
      icon: 'assets/subMenu/talk2.svg',
    },
  ];

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
