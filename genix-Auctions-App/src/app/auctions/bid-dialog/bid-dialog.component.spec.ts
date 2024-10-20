import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidDialogComponent } from './bid-dialog.component';

describe('BidDialogComponent', () => {
  let component: BidDialogComponent;
  let fixture: ComponentFixture<BidDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BidDialogComponent]
    });
    fixture = TestBed.createComponent(BidDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
