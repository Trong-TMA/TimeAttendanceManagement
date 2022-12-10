import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiPhepListComponent } from './nghi-phep-list.component';

describe('NghiPhepListComponent', () => {
  let component: NghiPhepListComponent;
  let fixture: ComponentFixture<NghiPhepListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghiPhepListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiPhepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
