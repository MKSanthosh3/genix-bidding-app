
import { createAction, props } from '@ngrx/store';
import { AuctionItem } from './auction.reducer';
// import { User } from './user.model';

export const loadAuctions = createAction(
    '[Auction] Load Auctions'
  );
  
  export const loadAuctionsSuccess = createAction(
    '[Auction] Load Auctions Success',
    props<{ auctions: any[] }>()
  );
  
  export const loadAuctionsFailure = createAction(
    '[Auction] Load Auctions Failure',
    props<{ error: string }>()
  );
  
  export const placeBid = createAction(
    '[Auction] Place Bid',
    props<{ auctionId: number; bidAmount: number }>()
  );
  
  export const placeBidSuccess = createAction(
    '[Auction] Place Bid Success',
    props<{ auctionId: number; bidAmount: number }>()
  );
  
  export const placeBidFailure = createAction(
    '[Auction] Place Bid Failure',
    props<{ error: string }>()
  );
  
  export const addAuction = createAction(
    '[Auction] Add Auction',
    props<{ title: string; description: string; startingBid: number; bidEndDate: Date }>()
  );
  
  export const addAuctionSuccess = createAction(
    '[Auction] Add Auction Success',
    props<{ auction: any }>()
  );
  
  export const addAuctionFailure = createAction(
    '[Auction] Add Auction Failure',
    props<{ error: string }>()
  );

  export const setAuctionItem = createAction(
    '[Auction] Set Auction Item',
    props<{ auctionItem: AuctionItem }>()
  );

  export const updateAuctionItemBid = createAction(
    '[Auction] Update Auction Item Bid',
    props<{ auctionItem: AuctionItem }>()
  );

  export const updateMaximumBid = createAction(
    '[Auction] Update Maximum Bid',
    props<{ maximumBid: number }>()
  );