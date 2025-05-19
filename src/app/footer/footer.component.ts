//footer.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <p>©2025 web425 portfolio</p>
    </footer>
  `,
  styles: [
    `
      footer {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        background: #fdf6e3;
        padding: 20px;
        font-size: 14px;
        border-top: 1px dashed #ccc;
      }
    `,
  ],
})
export class FooterComponent {}
