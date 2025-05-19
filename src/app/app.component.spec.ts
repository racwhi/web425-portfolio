import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component'; // your standalone component
import { FooterComponent } from './footer/footer.component';

import { RouterTestingModule } from '@angular/router/testing';

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (key: string) => null,
    },
  },
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavbarComponent, FooterComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title property set to "web425-portfolio"', () => {
    expect(component.title).toBe('web425-portfolio');
  });

  it('should render navbar, router outlet, and footer components', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
