import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChamCongListComponent } from './lich-su-cham-cong-list.component';

describe('LichSuChamCongListComponent', () => {
  let component: LichSuChamCongListComponent;
  let fixture: ComponentFixture<LichSuChamCongListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuChamCongListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChamCongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
