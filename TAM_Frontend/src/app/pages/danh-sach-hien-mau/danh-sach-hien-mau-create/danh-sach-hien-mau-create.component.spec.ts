import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHienMauCreateComponent } from './danh-sach-hien-mau-create.component';

describe('DanhSachHienMauCreateComponent', () => {
  let component: DanhSachHienMauCreateComponent;
  let fixture: ComponentFixture<DanhSachHienMauCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachHienMauCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachHienMauCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
