import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChamCongEditSearchComponent } from './lich-su-cham-cong-edit-search.component';

describe('LichSuChamCongEditSearchComponent', () => {
  let component: LichSuChamCongEditSearchComponent;
  let fixture: ComponentFixture<LichSuChamCongEditSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuChamCongEditSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChamCongEditSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
