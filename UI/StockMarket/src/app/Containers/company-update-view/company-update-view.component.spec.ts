import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUpdateViewComponent } from './company-update-view.component';

describe('CompanyUpdateViewComponent', () => {
  let component: CompanyUpdateViewComponent;
  let fixture: ComponentFixture<CompanyUpdateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyUpdateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUpdateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
