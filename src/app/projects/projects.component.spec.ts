
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  let component: ProjectsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of projects', () => {
    const compiled = fixture.nativeElement;
    const projectCards = compiled.querySelectorAll('.project-card');
    expect(projectCards.length).toBe(3);
  });

  it('should display project details correctly', () => {
    const firstProject = fixture.componentInstance.projects[0];
    const compiled = fixture.nativeElement;
    const firstCard = compiled.querySelector('.project-card');

    expect(firstCard.querySelector('h2').textContent).toBe(firstProject.title);
    expect(firstCard.innerHTML).toContain(firstProject.description);
    expect(firstCard.innerHTML).toContain(firstProject.technologies);
    expect(firstCard.innerHTML).toContain(firstProject.learned);
    const link = firstCard.querySelector('a');
    expect(link.href).toBe(firstProject.link);
  });
});
