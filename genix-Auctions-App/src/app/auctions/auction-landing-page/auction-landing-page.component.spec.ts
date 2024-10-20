import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionLandingPageComponent } from './auction-landing-page.component';

describe('AuctionLandingPageComponent', () => {
  let component: AuctionLandingPageComponent;
  let fixture: ComponentFixture<AuctionLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionLandingPageComponent]
    });
    fixture = TestBed.createComponent(AuctionLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
