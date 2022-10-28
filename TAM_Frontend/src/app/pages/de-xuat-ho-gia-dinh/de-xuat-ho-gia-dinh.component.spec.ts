import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeXuatHoGiaDinhComponent } from './de-xuat-ho-gia-dinh.component';

describe('DeXuatHoGiaDinhComponent', () => {
  let component: DeXuatHoGiaDinhComponent;
  let fixture: ComponentFixture<DeXuatHoGiaDinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeXuatHoGiaDinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeXuatHoGiaDinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
