import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableNestableComponent } from './sortable-nestable.component';

describe('SortableNestableComponent', () => {
  let component: SortableNestableComponent;
  let fixture: ComponentFixture<SortableNestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableNestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableNestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
