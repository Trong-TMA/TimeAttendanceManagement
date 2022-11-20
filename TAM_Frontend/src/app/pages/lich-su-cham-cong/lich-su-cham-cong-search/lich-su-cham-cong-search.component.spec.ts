import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChamCongSearchComponent } from './lich-su-cham-cong-search.component';

describe('LichSuChamCongSearchComponent', () => {
  let component: LichSuChamCongSearchComponent;
  let fixture: ComponentFixture<LichSuChamCongSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuChamCongSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChamCongSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
