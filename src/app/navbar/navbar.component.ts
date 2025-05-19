//navbar.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="tabs" role="navigation" aria-label="Main Navigation">
      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        aria-current="page"
        >Home</a
      >
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/projects" routerLinkActive="active">Projects</a>
      <a routerLink="/resume" routerLinkActive="active">Resume</a>
    </nav>
  `,
  styles: [
    `
      .tabs {
        display: flex;
        background: #fdf6e3;
        border-bottom: 2px solid #c0392b;
        padding: 0;
        margin: 0;
        overflow-x: auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .tabs a {
        display: inline-block;
        padding: 10px 20px;
        margin-right: 4px;
        background: #fefefe;
        border: 1px solid #ccc;
        border-bottom: none;
        border-radius: 5px 5px 0 0;
        text-decoration: none;
        color: #2c3e50;
        font-family: 'Courier New', Courier, monospace;
        transition: background 0.3s, font-weight 0.3s;
      }

      .tabs a:hover {
        background: #fffacd;
      }

      .tabs a.active {
        background: #fff;
        border-bottom: 2px solid #fff;
        font-weight: bold;
      }
    `,
  ],
})
export class NavbarComponent {}
