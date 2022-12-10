import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiPhepCreateComponent } from './nghi-phep-create.component';

describe('NghiPhepCreateComponent', () => {
  let component: NghiPhepCreateComponent;
  let fixture: ComponentFixture<NghiPhepCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghiPhepCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiPhepCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
