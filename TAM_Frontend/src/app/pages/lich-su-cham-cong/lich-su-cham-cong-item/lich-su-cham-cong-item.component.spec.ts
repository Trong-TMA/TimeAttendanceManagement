import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChamCongItemComponent } from './lich-su-cham-cong-item.component';

describe('LichSuChamCongItemComponent', () => {
  let component: LichSuChamCongItemComponent;
  let fixture: ComponentFixture<LichSuChamCongItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuChamCongItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChamCongItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
