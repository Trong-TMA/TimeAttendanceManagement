import { ComponentFixture, TestBed } from '@angular/core/testing';

import DeXuatCaNhanComponent from './de-xuat-ca-nhan.component';

describe('DeXuatCaNhanComponent', () => {
  let component: DeXuatCaNhanComponent;
  let fixture: ComponentFixture<DeXuatCaNhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeXuatCaNhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeXuatCaNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
