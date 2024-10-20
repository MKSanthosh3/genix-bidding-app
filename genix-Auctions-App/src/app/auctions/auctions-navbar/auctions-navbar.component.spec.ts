import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsNavbarComponent } from './auctions-navbar.component';

describe('AuctionsNavbarComponent', () => {
  let component: AuctionsNavbarComponent;
  let fixture: ComponentFixture<AuctionsNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionsNavbarComponent]
    });
    fixture = TestBed.createComponent(AuctionsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
