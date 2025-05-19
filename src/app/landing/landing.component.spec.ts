import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let fixture: ComponentFixture<LandingComponent>;
  let component: LandingComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the Welcome message with large font', () => {
    const compiled = fixture.nativeElement;
    const welcomeText = compiled.querySelector('p[style*="font-size: 200px"]');
    expect(welcomeText).toBeTruthy();
    expect(welcomeText.textContent).toContain('Welcome');
  });

  it('should contain the Portfolio message with font size 100px', () => {
    const compiled = fixture.nativeElement;
    const portfolioTextElements = compiled.querySelectorAll(
      'p[style*="font-size: 100px"]'
    );
    expect(portfolioTextElements.length).toBe(2);
    expect(portfolioTextElements[0].textContent).toContain('to My');
    expect(portfolioTextElements[1].textContent).toContain('Portfolio');
  });
});
