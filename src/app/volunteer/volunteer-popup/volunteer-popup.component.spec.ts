import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerPopupComponent } from './volunteer-popup.component';

describe('VolunteerPopupComponent', () => {
  let component: VolunteerPopupComponent;
  let fixture: ComponentFixture<VolunteerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
