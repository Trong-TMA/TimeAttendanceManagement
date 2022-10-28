import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonViItemComponent } from './don-vi-item.component';

describe('DonViItemComponent', () => {
  let component: DonViItemComponent;
  let fixture: ComponentFixture<DonViItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonViItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonViItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
