//landing.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  template: `
    <div class="notebook">
      <br />
      <p style="font-size: 200px;">Welcome</p>
      <br />
      <br />
      <br />
      <p style="font-size: 100px;">to My</p>
      <br />
      <br />
      <br />
      <p style="font-size: 100px;">Portfolio</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p style="font-size: 50px;">
        Explore my projects, experience, and more!
      </p>
    </div>
  `,
  styles: [
    `
      .notepad-image {
        max-width: 200px;
        width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class LandingComponent {}
