import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamCongSearchComponent } from './cham-cong-search.component';

describe('ChamCongSearchComponent', () => {
  let component: ChamCongSearchComponent;
  let fixture: ComponentFixture<ChamCongSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamCongSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamCongSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
