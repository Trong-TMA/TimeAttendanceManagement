import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHienMauEditComponent } from './danh-sach-hien-mau-edit.component';

describe('DanhSachHienMauEditComponent', () => {
  let component: DanhSachHienMauEditComponent;
  let fixture: ComponentFixture<DanhSachHienMauEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachHienMauEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachHienMauEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
