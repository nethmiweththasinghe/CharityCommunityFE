import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPopupComponent } from './donation-popup.component';

describe('DonationPopupComponent', () => {
  let component: DonationPopupComponent;
  let fixture: ComponentFixture<DonationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
