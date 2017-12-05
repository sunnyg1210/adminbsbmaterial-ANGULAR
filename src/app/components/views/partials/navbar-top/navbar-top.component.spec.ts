import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTopComponent } from './navbar-top.component';

describe('NavbarTopComponent', () => {
  let component: NavbarTopComponent;
  let fixture: ComponentFixture<NavbarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
