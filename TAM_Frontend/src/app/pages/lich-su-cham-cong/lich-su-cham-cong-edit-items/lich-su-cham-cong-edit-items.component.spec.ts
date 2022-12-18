import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChamCongEditItemsComponent } from './lich-su-cham-cong-edit-items.component';

describe('LichSuChamCongEditItemsComponent', () => {
  let component: LichSuChamCongEditItemsComponent;
  let fixture: ComponentFixture<LichSuChamCongEditItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuChamCongEditItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChamCongEditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
