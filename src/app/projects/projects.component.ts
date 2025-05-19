//projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string;
  learned: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notebook">
      <div class="projects">
        <h1>My Projects</h1>
        <div *ngFor="let project of projects" class="project-card">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <p><strong>Technologies Used:</strong> {{ project.technologies }}</p>
          <p><strong>What I Learned:</strong> {{ project.learned }}</p>
          <a [href]="project.link" target="_blank">View Project</a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .notebook {
        padding: 20px;
      }
      .projects {
        max-width: 800px;
        margin: 0 auto;
      }
      .project-card {
        border: 1px solid #ccc;
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 8px;
        background-color: #f9f9f9;
      }
      h1 {
        text-align: center;
        margin-bottom: 30px;
      }
      h2 {
        margin-top: 0;
      }
      a {
        display: inline-block;
        margin-top: 10px;
        color: #007bff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Project One',
      description: 'Angular- Web425',
      technologies: 'HTML, CSS, Node.js, Angular',
      learned: 'Learned about Angular frameworks.',
      link: 'https://github.com/racwhi/web-425',
    },
    {
      title: 'Project Two',
      description: 'RESTFul APIs -Web420',
      technologies: 'Node.js , RESTFul APIs',
      learned: 'Learned about RESTFul APIs.',
      link: 'https://github.com/racwhi/web-420',
    },
    {
      title: 'Project Three',
      description: 'Node.js -Web340',
      technologies: 'Node.js ',
      learned: 'Learned about Node.js.',
      link: 'https://github.com/racwhi/web-340',
    },
  ];
}
