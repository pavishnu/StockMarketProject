import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLandingViewComponent } from './user-landing-view.component';

describe('UserLandingViewComponent', () => {
  let component: UserLandingViewComponent;
  let fixture: ComponentFixture<UserLandingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLandingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
