import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingProductDetailsComponent } from './bidding-product-details.component';

describe('BiddingProductDetailsComponent', () => {
  let component: BiddingProductDetailsComponent;
  let fixture: ComponentFixture<BiddingProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiddingProductDetailsComponent]
    });
    fixture = TestBed.createComponent(BiddingProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
