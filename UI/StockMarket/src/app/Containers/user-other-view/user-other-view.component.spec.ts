import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOtherViewComponent } from './user-other-view.component';

describe('UserOtherViewComponent', () => {
  let component: UserOtherViewComponent;
  let fixture: ComponentFixture<UserOtherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOtherViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOtherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
