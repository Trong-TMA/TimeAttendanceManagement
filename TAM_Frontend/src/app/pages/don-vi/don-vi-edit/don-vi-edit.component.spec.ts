import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonViEditComponent } from './don-vi-edit.component';

describe('DonViEditComponent', () => {
  let component: DonViEditComponent;
  let fixture: ComponentFixture<DonViEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonViEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonViEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
