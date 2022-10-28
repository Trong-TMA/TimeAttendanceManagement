import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHienMauListComponent } from './danh-sach-hien-mau-list.component';

describe('DanhSachHienMauListComponent', () => {
  let component: DanhSachHienMauListComponent;
  let fixture: ComponentFixture<DanhSachHienMauListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachHienMauListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachHienMauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
