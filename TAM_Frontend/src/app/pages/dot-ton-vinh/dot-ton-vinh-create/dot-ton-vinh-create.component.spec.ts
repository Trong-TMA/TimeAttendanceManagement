import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotTonVinhCreateComponent } from './dot-ton-vinh-create.component';

describe('DotTonVinhCreateComponent', () => {
  let component: DotTonVinhCreateComponent;
  let fixture: ComponentFixture<DotTonVinhCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotTonVinhCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotTonVinhCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
