import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infobox4Component } from './infobox-4.component';

describe('Infobox4Component', () => {
  let component: Infobox4Component;
  let fixture: ComponentFixture<Infobox4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infobox4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infobox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
