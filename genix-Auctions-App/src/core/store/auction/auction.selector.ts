import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuctionState } from './auction.reducer';


export const selectAuctionState = createFeatureSelector<AuctionState>('auction');


export const selectAllAuctions = createSelector(
  selectAuctionState,
  (state: AuctionState) => state.auctions
);

export const selectAuctionsLoading = createSelector(
  selectAuctionState,
  (state: AuctionState) => state.loading
);

export const selectAuctionsError = createSelector(
  selectAuctionState,
  (state: AuctionState) => state.error
);

export const selectSelectedAuctionItem = createSelector(
  selectAuctionState,
  (state: AuctionState) => state.selectedAuctionItem
);
