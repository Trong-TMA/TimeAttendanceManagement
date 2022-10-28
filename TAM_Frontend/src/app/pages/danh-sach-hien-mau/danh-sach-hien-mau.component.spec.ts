import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHienMauComponent } from './danh-sach-hien-mau.component';

describe('DanhSachHienMauComponent', () => {
  let component: DanhSachHienMauComponent;
  let fixture: ComponentFixture<DanhSachHienMauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachHienMauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachHienMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
