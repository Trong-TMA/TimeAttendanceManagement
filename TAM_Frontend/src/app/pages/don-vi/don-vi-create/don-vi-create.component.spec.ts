import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonViCreateComponent } from './don-vi-create.component';

describe('DonViCreateComponent', () => {
  let component: DonViCreateComponent;
  let fixture: ComponentFixture<DonViCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonViCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonViCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
