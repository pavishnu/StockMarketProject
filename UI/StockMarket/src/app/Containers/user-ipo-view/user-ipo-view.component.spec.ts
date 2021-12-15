import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIpoViewComponent } from './user-ipo-view.component';

describe('UserIpoViewComponent', () => {
  let component: UserIpoViewComponent;
  let fixture: ComponentFixture<UserIpoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIpoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIpoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
