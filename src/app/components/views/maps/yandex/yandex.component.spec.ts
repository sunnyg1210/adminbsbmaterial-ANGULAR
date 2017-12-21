import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YandexComponent } from './yandex.component';

describe('YandexComponent', () => {
  let component: YandexComponent;
  let fixture: ComponentFixture<YandexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YandexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YandexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
