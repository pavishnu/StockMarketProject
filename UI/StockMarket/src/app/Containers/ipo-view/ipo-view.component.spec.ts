import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoViewComponent } from './ipo-view.component';

describe('IpoViewComponent', () => {
  let component: IpoViewComponent;
  let fixture: ComponentFixture<IpoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
