import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamCongListComponent } from './cham-cong-list.component';

describe('ChamCongListComponent', () => {
  let component: ChamCongListComponent;
  let fixture: ComponentFixture<ChamCongListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamCongListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamCongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
