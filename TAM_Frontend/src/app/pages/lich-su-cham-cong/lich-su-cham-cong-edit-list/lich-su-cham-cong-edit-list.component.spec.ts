import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChamCongEditListComponent } from './lich-su-cham-cong-edit-list.component';

describe('LichSuChamCongEditListComponent', () => {
  let component: LichSuChamCongEditListComponent;
  let fixture: ComponentFixture<LichSuChamCongEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuChamCongEditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChamCongEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
