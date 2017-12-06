import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredComponent } from './colored.component';

describe('ColoredComponent', () => {
  let component: ColoredComponent;
  let fixture: ComponentFixture<ColoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
