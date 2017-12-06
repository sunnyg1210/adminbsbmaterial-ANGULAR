import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infobox1Component } from './infobox-1.component';

describe('Infobox1Component', () => {
  let component: Infobox1Component;
  let fixture: ComponentFixture<Infobox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infobox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infobox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
