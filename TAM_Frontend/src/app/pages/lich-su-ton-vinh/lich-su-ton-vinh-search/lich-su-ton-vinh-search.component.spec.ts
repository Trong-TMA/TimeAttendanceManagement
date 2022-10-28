import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuTonVinhSearchComponent } from './lich-su-ton-vinh-search.component';

describe('LichSuTonVinhSearchComponent', () => {
  let component: LichSuTonVinhSearchComponent;
  let fixture: ComponentFixture<LichSuTonVinhSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuTonVinhSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuTonVinhSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
