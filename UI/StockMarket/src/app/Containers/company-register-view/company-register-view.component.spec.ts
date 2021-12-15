import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegisterViewComponent } from './company-register-view.component';

describe('CompanyRegisterViewComponent', () => {
  let component: CompanyRegisterViewComponent;
  let fixture: ComponentFixture<CompanyRegisterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRegisterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
