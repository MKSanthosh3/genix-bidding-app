import { createAction, props } from '@ngrx/store';

export const placeBid = createAction(
  '[Bidding] Place Bid',
  props<{ auctionId: number; bidAmount: number }>()
);

export const placeBidSuccess = createAction(
  '[Bidding] Place Bid Success',
  props<{ bid: any }>()
);

export const placeBidFailure = createAction(
  '[Bidding] Place Bid Failure',
  props<{ error: string }>()
);

export const loadBids = createAction(
  '[Bidding] Load Bids',
  props<{ auctionId: number }>()
);

export const loadBidsSuccess = createAction(
  '[Bidding] Load Bids Success',
  props<{ bids: any[] }>()
);

export const loadBidsFailure = createAction(
  '[Bidding] Load Bids Failure',
  props<{ error: string }>()
);