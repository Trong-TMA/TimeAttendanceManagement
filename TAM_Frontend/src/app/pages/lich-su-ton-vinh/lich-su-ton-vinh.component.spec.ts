import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuTonVinhComponent } from './lich-su-ton-vinh.component';

describe('LichSuTonVinhComponent', () => {
  let component: LichSuTonVinhComponent;
  let fixture: ComponentFixture<LichSuTonVinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuTonVinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuTonVinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
