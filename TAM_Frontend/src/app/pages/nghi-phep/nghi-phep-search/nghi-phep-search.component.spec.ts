import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiPhepSearchComponent } from './nghi-phep-search.component';

describe('NghiPhepSearchComponent', () => {
  let component: NghiPhepSearchComponent;
  let fixture: ComponentFixture<NghiPhepSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghiPhepSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiPhepSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
