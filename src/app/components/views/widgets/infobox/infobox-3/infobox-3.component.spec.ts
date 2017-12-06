import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infobox3Component } from './infobox-3.component';

describe('Infobox3Component', () => {
  let component: Infobox3Component;
  let fixture: ComponentFixture<Infobox3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infobox3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infobox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
