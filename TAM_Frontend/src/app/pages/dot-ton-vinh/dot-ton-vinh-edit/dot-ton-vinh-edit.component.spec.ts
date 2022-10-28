import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotTonVinhEditComponent } from './dot-ton-vinh-edit.component';

describe('DotTonVinhEditComponent', () => {
  let component: DotTonVinhEditComponent;
  let fixture: ComponentFixture<DotTonVinhEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotTonVinhEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotTonVinhEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
