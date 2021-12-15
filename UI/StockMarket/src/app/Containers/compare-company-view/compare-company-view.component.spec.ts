import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCompanyViewComponent } from './compare-company-view.component';

describe('CompareCompanyViewComponent', () => {
  let component: CompareCompanyViewComponent;
  let fixture: ComponentFixture<CompareCompanyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCompanyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCompanyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
