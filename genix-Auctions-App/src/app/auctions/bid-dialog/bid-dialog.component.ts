import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuctionItem, AuctionState } from 'src/core/store/auction/auction.reducer';
import { selectSelectedAuctionItem } from 'src/core/store/auction/auction.selector';
import * as AuctionActions from 'src/core/store/auction/auction.actions';

@Component({
  selector: 'app-bid-dialog',
  templateUrl: './bid-dialog.component.html',
  styleUrls: ['./bid-dialog.component.scss']
})
export class BidDialogComponent implements OnInit, OnDestroy {
  auctionItem$!: Observable<AuctionItem | null>;
  straightBid: number = 160;
  maximumBid: number = 165;
  minimumBid: number = 0;
  currentBid: number = 0;
  isBidSubmitted: boolean = false;
  auctionItemSubscription: Subscription | null = null;

  constructor(public activeModal: NgbActiveModal, private store: Store<AuctionState>) {}

  ngOnInit() {
    this.auctionItem$ = this.store.select(selectSelectedAuctionItem);
    this.auctionItem$.subscribe(auctionItem => {
      if (auctionItem) {
        this.minimumBid = auctionItem.minimumBid;
        this.currentBid = auctionItem.currentBid;
        this.straightBid = auctionItem.currentBid + 1; // Initialize with a bid higher than current bid
        this.maximumBid = auctionItem.currentBid + 5;  // Initialize max bid slightly higher
      }
    });
  }

  increment(bidType: 'straightBid' | 'maximumBid'): void {
    if (bidType === 'straightBid') {
      this.straightBid += 1;
      if (this.maximumBid < this.straightBid) {
        this.maximumBid = this.straightBid;
      }
    } else if (bidType === 'maximumBid') {
      this.maximumBid += 1;
    }
  }

  decrement(bidType: 'straightBid' | 'maximumBid'): void {
    if (bidType === 'straightBid' && this.straightBid > this.minimumBid) {
      this.straightBid -= 1;
    } else if (bidType === 'maximumBid' && this.maximumBid > this.straightBid) {
      this.maximumBid -= 1;
    }
  }

  submitBid(): void {
    this.auctionItemSubscription = this.auctionItem$.subscribe(auctionItem => {
      if (auctionItem && this.straightBid >= auctionItem.minimumBid && this.maximumBid >= this.straightBid) {
        console.log('Bid submitted:', {
          straightBid: this.straightBid,
          maximumBid: this.maximumBid
        });
        this.isBidSubmitted = true;

        // Simulate other bidders between your bid and max bid
        const simulatedBids = [];
        let currentBid = auctionItem.currentBid;

        while (currentBid < this.straightBid) {
          currentBid += Math.floor(Math.random() * 10) + 5; // Random increment between 5 and 15
          if (currentBid < this.straightBid) {
            const bidderType = Math.random() > 0.5 ? 'The Floor' : 'Internet Bidder';
            simulatedBids.push(`${bidderType} bids $${currentBid}`);
          }
        }

        // Add user's bid to history
        simulatedBids.push(`Your bid is $${this.straightBid}`);

        const updatedAuctionItem: AuctionItem = {
          ...auctionItem,
          currentBid: this.straightBid, // Update the current bid
          biddingHistory: [...simulatedBids, ...auctionItem.biddingHistory]
        };

        // Dispatch action to update the auction item in the store
        this.store.dispatch(AuctionActions.updateAuctionItemBid({ auctionItem: updatedAuctionItem }));

        // Close the modal and pass the result back
        this.activeModal.close({ newBidAmount: this.straightBid });
      } else {
        console.error('Invalid bid values');
      }
    });
  }

  closePopup(): void {
    this.activeModal.dismiss('Popup closed');
  }

  ngOnDestroy(): void {
    if (this.auctionItemSubscription) {
      this.auctionItemSubscription.unsubscribe();
    }
  }
}
