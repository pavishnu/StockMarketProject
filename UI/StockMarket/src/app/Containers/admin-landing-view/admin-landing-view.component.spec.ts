import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingViewComponent } from './admin-landing-view.component';

describe('AdminLandingViewComponent', () => {
  let component: AdminLandingViewComponent;
  let fixture: ComponentFixture<AdminLandingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLandingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
