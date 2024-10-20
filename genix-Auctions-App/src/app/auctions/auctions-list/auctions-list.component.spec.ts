import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsListComponent } from './auctions-list.component';

describe('AuctionsListComponent', () => {
  let component: AuctionsListComponent;
  let fixture: ComponentFixture<AuctionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionsListComponent]
    });
    fixture = TestBed.createComponent(AuctionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
