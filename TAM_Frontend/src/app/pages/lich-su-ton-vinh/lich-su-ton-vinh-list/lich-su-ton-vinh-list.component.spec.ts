import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuTonVinhListComponent } from './lich-su-ton-vinh-list.component';

describe('LichSuTonVinhListComponent', () => {
  let component: LichSuTonVinhListComponent;
  let fixture: ComponentFixture<LichSuTonVinhListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuTonVinhListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuTonVinhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
