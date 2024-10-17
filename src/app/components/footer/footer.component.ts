import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="container-footer">
      <div class="container-logo">
        <img
          src="assets/header/skandia-logo.svg"
          alt="Logo de Skandia"
          class="logo"
        />
        <span>© 2019 Skandia</span>
        <div class="container-datos">
          <span>
            PBX: <span class="text-highlight">658 4000</span> /
            <span class="text-highlight">484 1300</span>
          </span>
          <span>
            Línea nacional <span class="text-highlight">01 8000 517 526</span>
          </span>
          <span>Línea Corporativa 658 4123</span>
          <span>Av. 19 # 109A - 30 Bogotá D.C., Colombia</span>
          <span class="text-oficina">
            <strong>Oficinas a nivel nacional</strong>
          </span>
        </div>
      </div>

      <nav class="menu-footer" aria-label="Menú del footer">
        <a href="#">Términos y Condiciones</a>
        <a href="#">Defensoría del Consumidor Financiero</a>
        <a href="#">Protección de Datos</a>
        <a href="#">Declaración FATCA y CRS</a>
        <a href="#">Recomendaciones de Seguridad</a>
        <a href="#">Ley de Transparencia</a>
        <a href="#">Mapa del sitio</a>
      </nav>

      <div class="container-redes-sociales">
        <a href="#" aria-label="Facebook">
          <img
            src="assets/footer/facebook.svg"
            alt="Facebook"
            class="icon-redes-social"
          />
        </a>
        <a href="#" aria-label="YouTube">
          <img
            src="assets/footer/youtube.svg"
            alt="YouTube"
            class="icon-redes-social"
          />
        </a>
        <a href="#" aria-label="Twitter">
          <img
            src="assets/footer/twitter.svg"
            alt="Twitter"
            class="icon-redes-social"
          />
        </a>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
