import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamCongEditCheckinoutComponent } from './cham-cong-edit-checkinout.component';

describe('ChamCongEditCheckinoutComponent', () => {
  let component: ChamCongEditCheckinoutComponent;
  let fixture: ComponentFixture<ChamCongEditCheckinoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamCongEditCheckinoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamCongEditCheckinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
