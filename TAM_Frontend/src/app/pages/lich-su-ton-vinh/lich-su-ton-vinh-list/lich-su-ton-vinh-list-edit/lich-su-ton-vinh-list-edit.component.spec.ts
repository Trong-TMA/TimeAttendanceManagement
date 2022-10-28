import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuTonVinhListEditComponent } from './lich-su-ton-vinh-list-edit.component';

describe('LichSuTonVinhListEditComponent', () => {
  let component: LichSuTonVinhListEditComponent;
  let fixture: ComponentFixture<LichSuTonVinhListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuTonVinhListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuTonVinhListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
