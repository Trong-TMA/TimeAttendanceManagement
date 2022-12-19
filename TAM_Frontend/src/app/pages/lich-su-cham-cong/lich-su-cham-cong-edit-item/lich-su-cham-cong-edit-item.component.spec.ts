import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChamCongEditItemComponent } from './lich-su-cham-cong-edit-item.component';

describe('LichSuChamCongEditItemComponent', () => {
  let component: LichSuChamCongEditItemComponent;
  let fixture: ComponentFixture<LichSuChamCongEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuChamCongEditItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChamCongEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
