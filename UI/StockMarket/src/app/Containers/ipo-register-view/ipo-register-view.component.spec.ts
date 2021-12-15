import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoRegisterViewComponent } from './ipo-register-view.component';

describe('IpoRegisterViewComponent', () => {
  let component: IpoRegisterViewComponent;
  let fixture: ComponentFixture<IpoRegisterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoRegisterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
