import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeUpdateViewComponent } from './exchange-update-view.component';

describe('ExchangeUpdateViewComponent', () => {
  let component: ExchangeUpdateViewComponent;
  let fixture: ComponentFixture<ExchangeUpdateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeUpdateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeUpdateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
