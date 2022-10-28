import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotTonVinhComponent } from './dot-ton-vinh.component';

describe('DotTonVinhComponent', () => {
  let component: DotTonVinhComponent;
  let fixture: ComponentFixture<DotTonVinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotTonVinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotTonVinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
