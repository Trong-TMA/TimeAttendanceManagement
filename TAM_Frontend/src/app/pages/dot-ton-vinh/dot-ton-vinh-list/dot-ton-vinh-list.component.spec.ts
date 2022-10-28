import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotTonVinhListComponent } from './dot-ton-vinh-list.component';

describe('DotTonVinhListComponent', () => {
  let component: DotTonVinhListComponent;
  let fixture: ComponentFixture<DotTonVinhListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotTonVinhListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotTonVinhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
