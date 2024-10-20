import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BiddingState } from './bidding.reducer';

export const selectBiddingState = createFeatureSelector<BiddingState>('bidding');

export const selectAllBids = createSelector(
  selectBiddingState,
  (state: BiddingState) => state.bids
);

export const selectBidsLoading = createSelector(
  selectBiddingState,
  (state: BiddingState) => state.loading
);

export const selectBidsError = createSelector(
  selectBiddingState,
  (state: BiddingState) => state.error
);
