import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHienMauSearchComponent } from './danh-sach-hien-mau-search.component';

describe('DanhSachHienMauSearchComponent', () => {
  let component: DanhSachHienMauSearchComponent;
  let fixture: ComponentFixture<DanhSachHienMauSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachHienMauSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachHienMauSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
