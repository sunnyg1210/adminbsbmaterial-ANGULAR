import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infobox5Component } from './infobox-5.component';

describe('Infobox5Component', () => {
  let component: Infobox5Component;
  let fixture: ComponentFixture<Infobox5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infobox5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infobox5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
