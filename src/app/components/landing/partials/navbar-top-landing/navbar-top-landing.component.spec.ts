import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTopLandingComponent } from './navbar-top-landing.component';

describe('NavbarTopLandingComponent', () => {
  let component: NavbarTopLandingComponent;
  let fixture: ComponentFixture<NavbarTopLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTopLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTopLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
