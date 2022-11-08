import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChamCongComponent } from './lich-su-cham-cong.component';

describe('LichSuChamCongComponent', () => {
  let component: LichSuChamCongComponent;
  let fixture: ComponentFixture<LichSuChamCongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuChamCongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChamCongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
