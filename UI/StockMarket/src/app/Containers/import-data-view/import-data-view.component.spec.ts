import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDataViewComponent } from './import-data-view.component';

describe('ImportDataViewComponent', () => {
  let component: ImportDataViewComponent;
  let fixture: ComponentFixture<ImportDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
