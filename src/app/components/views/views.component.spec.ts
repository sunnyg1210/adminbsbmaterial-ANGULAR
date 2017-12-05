import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsComponent } from './views.component';

describe('ViewsComponent', () => {
  let component: ViewsComponent;
  let fixture: ComponentFixture<ViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
