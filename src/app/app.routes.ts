
//app.routes.ts

import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }, // Redirect all unknown routes to home
];

export { routes };

