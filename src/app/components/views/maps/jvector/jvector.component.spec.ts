import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvectorComponent } from './jvector.component';

describe('JvectorComponent', () => {
  let component: JvectorComponent;
  let fixture: ComponentFixture<JvectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
