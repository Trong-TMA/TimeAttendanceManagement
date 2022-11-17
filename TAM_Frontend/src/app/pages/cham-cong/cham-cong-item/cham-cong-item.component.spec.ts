import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamCongItemComponent } from './cham-cong-item.component';

describe('ChamCongItemComponent', () => {
  let component: ChamCongItemComponent;
  let fixture: ComponentFixture<ChamCongItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamCongItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamCongItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
