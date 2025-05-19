
//app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>

    <main>
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'web425-portfolio';
}
