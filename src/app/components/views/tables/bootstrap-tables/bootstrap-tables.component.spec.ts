import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTablesComponent } from './bootstrap-tables.component';

describe('BootstrapTablesComponent', () => {
  let component: BootstrapTablesComponent;
  let fixture: ComponentFixture<BootstrapTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
