import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportNguoiHienMauComponent } from './import-nguoi-hien-mau.component';

describe('ImportNguoiHienMauComponent', () => {
  let component: ImportNguoiHienMauComponent;
  let fixture: ComponentFixture<ImportNguoiHienMauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportNguoiHienMauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportNguoiHienMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
