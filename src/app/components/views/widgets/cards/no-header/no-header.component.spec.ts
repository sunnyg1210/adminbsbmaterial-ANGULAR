import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoHeaderComponent } from './no-header.component';

describe('NoHeaderComponent', () => {
  let component: NoHeaderComponent;
  let fixture: ComponentFixture<NoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
