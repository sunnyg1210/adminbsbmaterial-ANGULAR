import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2TableComponent } from './ng2-table.component';

describe('Ng2TableComponent', () => {
  let component: Ng2TableComponent;
  let fixture: ComponentFixture<Ng2TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
