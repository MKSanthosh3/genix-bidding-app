import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BidDialogComponent } from '../bid-dialog/bid-dialog.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuctionState, AuctionItem } from 'src/core/store/auction/auction.reducer';
import { selectSelectedAuctionItem } from 'src/core/store/auction/auction.selector';

interface Review {
  reviewer: string;
  date: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

interface Bid {
  bidder: string;
  amount: number;
}

@Component({
  selector: 'app-bidding-product-details',
  templateUrl: './bidding-product-details.component.html',
  styleUrls: ['./bidding-product-details.component.scss']
})
export class BiddingProductDetailsComponent implements OnInit {
  auctionItem$!: Observable<AuctionItem | null>;

  reviews: Review[] = [
    {
      reviewer: 'Kristin Watson',
      date: 'March 14, 2021',
      rating: 5,
      comment: 'These headphones are a game-changer for my daily commute. The noise-canceling feature works like a charm.',
      avatarUrl: '../../../assets/images/bid/review1.png'
    },
    {
      reviewer: 'Jenny Wilson',
      date: 'January 28, 2021',
      rating: 5,
      comment: 'I’m blown away by the sound clarity these headphones offer.',
      avatarUrl: '../../../assets/images/bid/review2.png'
    },
    {
      reviewer: 'Courtney Henry',
      date: 'February 15, 2021',
      rating: 4,
      comment: 'As a frequent flyer, these headphones have become my must-have travel companion.',
      avatarUrl: '../../../assets/images/bid/review3.png'
    }
  ];

  bids: Bid[] = [
    { bidder: 'The Floor', amount: 157 },
    { bidder: 'The Floor', amount: 150 },
    { bidder: 'Internet Bidder', amount: 145 },
    { bidder: 'The Floor', amount: 140 },
    { bidder: 'Internet Bidder', amount: 132 },
    { bidder: 'The Floor', amount: 111 },
    { bidder: 'Internet Bidder', amount: 109 },
    { bidder: 'The Floor', amount: 105 }
  ];

  constructor(
    public modalService: NgbModal,
    private store: Store<AuctionState>
  ) {}

  ngOnInit(): void {
    this.auctionItem$ = this.store.select(selectSelectedAuctionItem);
    this.auctionItem$.subscribe(auctionItem => {
      if (auctionItem) {
        // Find the highest bid from the bids array and update it if necessary
        const highestBid = Math.max(...this.bids.map(bid => bid.amount));
        if (auctionItem.currentBid > highestBid) {
          this.bids = [
            { bidder: 'You', amount: auctionItem.currentBid }, // Add the user's latest bid
            ...this.bids.filter(bid => bid.amount < auctionItem.currentBid) // Keep other bids that are lower
          ];
        }
      }
    });
  }

  openModal() {
    const modalRef = this.modalService.open(BidDialogComponent);

    modalRef.result.then(
      (result) => {
        // Handle the result returned from the modal (e.g., the updated bid amount)
        if (result && result.newBidAmount) {
          // Update the bids list if the new bid amount is higher than the current bids
          const highestBid = Math.max(...this.bids.map(bid => bid.amount));
          if (result.newBidAmount > highestBid) {
            this.bids = [
              { bidder: 'You', amount: result.newBidAmount }, // Add the user's latest bid
              ...this.bids.filter(bid => bid.amount < result.newBidAmount) // Keep other bids that are lower
            ];
          }
        }
      },
      (reason) => {
        // Handle the case when the modal is dismissed (e.g., user closes it without bidding)
        console.log('Modal dismissed:', reason);
      }
    );
  }
}
