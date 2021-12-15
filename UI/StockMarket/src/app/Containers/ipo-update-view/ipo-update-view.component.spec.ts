import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoUpdateViewComponent } from './ipo-update-view.component';

describe('IpoUpdateViewComponent', () => {
  let component: IpoUpdateViewComponent;
  let fixture: ComponentFixture<IpoUpdateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoUpdateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoUpdateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
