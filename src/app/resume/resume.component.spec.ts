
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let fixture: ComponentFixture<ResumeComponent>;
  let component: ResumeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the "Download Resume" button', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('#downloadBtn');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Download Resume');
  });

  it('should trigger downloadResume method on button click', () => {
    spyOn(component, 'downloadResume');
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('#downloadBtn');
    button.click();
    expect(component.downloadResume).toHaveBeenCalled();
  });

  it('should include resume content with "Objective" section', () => {
    const compiled = fixture.nativeElement;
    const resumeDiv = compiled.querySelector('#resumeContent');
    expect(resumeDiv).toBeTruthy();
    expect(resumeDiv.innerHTML).toContain('Objective');
  });
});

