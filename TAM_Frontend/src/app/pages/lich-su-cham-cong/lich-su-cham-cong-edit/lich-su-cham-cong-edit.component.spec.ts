import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChamCongEditComponent } from './lich-su-cham-cong-edit.component';

describe('LichSuChamCongEditComponent', () => {
  let component: LichSuChamCongEditComponent;
  let fixture: ComponentFixture<LichSuChamCongEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuChamCongEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChamCongEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
