import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiPhepEditComponent } from './nghi-phep-edit.component';

describe('NghiPhepEditComponent', () => {
  let component: NghiPhepEditComponent;
  let fixture: ComponentFixture<NghiPhepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghiPhepEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiPhepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
