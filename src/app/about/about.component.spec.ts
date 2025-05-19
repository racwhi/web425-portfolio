import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let component: AboutComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "About Me" header', () => {
    const compiled = fixture.nativeElement;
    const heading = compiled.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('About Me');
  });


  it('should contain the personal paragraph', () => {
    const compiled = fixture.nativeElement;
    const paragraph = compiled.querySelector('p');
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toContain('living in the Midwest');
  });
});
