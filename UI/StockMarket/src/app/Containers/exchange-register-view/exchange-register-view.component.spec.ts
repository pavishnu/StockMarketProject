import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRegisterViewComponent } from './exchange-register-view.component';

describe('ExchangeRegisterViewComponent', () => {
  let component: ExchangeRegisterViewComponent;
  let fixture: ComponentFixture<ExchangeRegisterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRegisterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
