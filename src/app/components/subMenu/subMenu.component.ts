import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-subMenu',
  standalone: true,
  imports: [NgIf, NgClass, NgFor],
  template: `
    <aside class="sub-menu-container" [ngClass]="{ collapsed: !isExpanded }">
      <div class="menu-header" (click)="toggleMenu()" aria-label="Toggle menu">
        <img src="assets/subMenu/home.svg" alt="Home" class="icon" />
        <span *ngIf="isExpanded" class="text-home">Inicio</span>
      </div>

      <nav aria-label="Opciones del menú">
        <div class="menu-item" *ngFor="let item of menuItems">
          <img
            [src]="item.icon"
            [alt]="item.label"
            class="icon"
            *ngIf="isExpanded"
          />
          <span *ngIf="isExpanded">{{ item.label }}</span>
        </div>
      </nav>
    </aside>
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
    { label: 'Servicio al cliente', icon: 'assets/subMenu/talk2.svg' },
  ];

  constructor(private menuService: MenuService) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isExpanded = isOpen;
    });
  }

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
