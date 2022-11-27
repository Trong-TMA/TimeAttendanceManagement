import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiPhepComponent } from './nghi-phep.component';

describe('NghiPhepComponent', () => {
  let component: NghiPhepComponent;
  let fixture: ComponentFixture<NghiPhepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghiPhepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiPhepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
