import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamCongChiTietComponent } from './cham-cong-chi-tiet.component';

describe('ChamCongChiTietComponent', () => {
  let component: ChamCongChiTietComponent;
  let fixture: ComponentFixture<ChamCongChiTietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamCongChiTietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamCongChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
