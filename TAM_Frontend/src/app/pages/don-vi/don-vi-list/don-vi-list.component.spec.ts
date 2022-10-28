import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonViListComponent } from './don-vi-list.component';

describe('DonViListComponent', () => {
  let component: DonViListComponent;
  let fixture: ComponentFixture<DonViListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonViListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonViListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
