import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotTonVinhItemComponent } from './dot-ton-vinh-item.component';

describe('DotTonVinhItemComponent', () => {
  let component: DotTonVinhItemComponent;
  let fixture: ComponentFixture<DotTonVinhItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotTonVinhItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotTonVinhItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
