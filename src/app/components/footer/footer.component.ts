import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="containerFooter">
      <div class="containerLogo">
        <img
          src="assets/header/skandia-logo.svg"
          alt="Skandia logo"
          class="logo"
        />
        <span>© 2019 Skandia</span>
        <div class="containerDatos">
          <span>
            PBX: <span class="textColor">658 4000</span> /
            <span class="textColor">484 1300</span>
          </span>
          <span
            >Línea nacional <span class="textColor">01 8000 517 526</span></span
          >
          <span>Línea Corporativa 658 4123</span>
          <span>Av. 19 # 109A - 30 Bogotá D.C., Colombia</span>
          <span class="textOficina"
            ><strong>Oficinas a nivel nacional</strong></span
          >
        </div>
      </div>

      <div class="menuFooter">
        <a href="#">Términos y Condiciones Canales de Servicio</a>
        <a href="#">Defensoría del Consumidor Financiero</a>
        <a href="#">Protección de Datos</a>
        <a href="#">Definiciones Generales - Auto declaración FATCA y CRS</a>
        <a href="#">Recomendaciones de Seguridad</a>
        <a href="#">Ley de Transparencia</a>
        <a href="#">Mapa del sitio</a>
      </div>

      <div class="containerRedesSociales">
        <img
          src="assets/footer/facebookl.svg"
          alt="Facebook logo"
          class="iconRedesSocial"
        />
        <img
          src="assets/footer/youtube.svg"
          alt="Youtube logo"
          class="iconRedesSocial"
        />
        <img
          src="assets/footer/twitter.svg"
          alt="Tiwtter logo"
          class="iconRedesSocial"
        />
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
