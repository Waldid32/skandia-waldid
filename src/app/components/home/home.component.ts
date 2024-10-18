import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="container-home">
      <section class="container-home-card">
        <div class="icon-home">
          <img src="assets/home/home.svg" alt="Ícono de inicio" />
          <a href="#" aria-label="Ir al inicio">Ir al inicio</a>
        </div>

        <div class="title-home">
          <h1>¡Tu objetivo ha sido agregado exitosamente!</h1>
          <p>¡Te hemos enviado un correo con la notificación!</p>
        </div>

        <div class="goal-card">
          <div class="goal-header">
            <div class="goal-details">
              <h2>Conocer a mi sobrino</h2>
              <p><strong>Categoría: Bienestar</strong></p>
            </div>
            <div class="goal-link">
              <h1><a href="#">Revisar objetivo</a></h1>
            </div>
          </div>

          <div class="goal-info">
            <div>
              <p>En esta fecha:</p>
              <h3 class="goal-date">Diciembre/2022</h3>
            </div>
            <div>
              <p>Lograrás:</p>
              <h3 class="goal-amount">$6.000.000</h3>
            </div>
            <div>
              <p>Ya cuentas con:</p>
              <h3 class="goal-current">$0</h3>
            </div>
          </div>

          <div class="goal-association">
            <h3>
              <img
                src="assets/home/icon-awesome-check-circle.svg"
                alt="Ícono de verificación"
              />
              <a href="#">¡Asocia productos para monitorear su progreso!</a>
            </h3>
          </div>

          <div class="goal-background">
            <img src="/assets/home/montasna.svg" alt="Montaña" />
          </div>
        </div>
      </section>

      <section class="container-progress">
        <div class="container-progress-content">
          <h3>
            ¡Vamos por esos
            <span class="highlight-amount">$6.000.000</span> para
            <span class="highlight-goal">Conocer a mi sobrino</span>!
          </h3>
          <p>
            ¡A través de tus productos y nuestros rendimientos podremos
            lograrlo!
          </p>
          <div class="progress-icon">
            <h4>Asocia tus productos o adquiere uno nuevo.</h4>
            <img src="/assets/home/group12953.svg" alt="Group Icon" />
          </div>
        </div>
      </section>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
