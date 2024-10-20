import { createReducer, on } from '@ngrx/store';
import * as BiddingActions from './bidding.actions';

export interface BiddingState {
  bids: any[];
  loading: boolean;
  error: string | null;
}

export const initialState: BiddingState = {
  bids: [],
  loading: false,
  error: null,
};

export const biddingReducer = createReducer(
  initialState,
  on(BiddingActions.placeBid, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(BiddingActions.placeBidSuccess, (state, { bid }) => ({
    ...state,
    bids: [...state.bids, bid],
    loading: false,
  })),
  on(BiddingActions.placeBidFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(BiddingActions.loadBids, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(BiddingActions.loadBidsSuccess, (state, { bids }) => ({
    ...state,
    bids,
    loading: false,
  })),
  on(BiddingActions.loadBidsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);