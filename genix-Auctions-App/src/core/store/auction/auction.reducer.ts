// import { createReducer, on } from '@ngrx/store';
// import * as AuctionActions from './auction.actions';

import { createReducer, on } from '@ngrx/store';
// import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure, logout, logoutSuccess, logoutFailure } from './auth.actions';
import * as AuctionActions from './auction.actions';
import { User } from '../auth/user.model';
// import { User } from './user.model';

export interface AuthState {
  user: User | null;
  token: string | null;
  error: string | null;
  loading: boolean;
  isLoggedIn: boolean;  
}

export interface AuctionItem {
  imageUrl: string;
  name: string;
  minimumBid: number;
  currentBid: number;
  endTime: string;
  description:string;
  biddingHistory: string[];
}

const initialAuctionItem: AuctionItem = {
  imageUrl: 'path/to/image',
  name: 'Example Item',
  minimumBid: 50,
  currentBid: 50,
  endTime: '1 day 12 hrs 43 minutes',
  description: 'Item description here',
  biddingHistory: [] // Initialize as an empty array
};

export interface AuctionState {
  auctions: AuctionItem[];
  loading: boolean;
  error: string | null;
  selectedAuctionItem: AuctionItem | null;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  error: null,
  loading: false,
  isLoggedIn: false,  
};

export const initialAuctionState: AuctionState = {
  auctions: [],
  loading: false,
  error: null,
  selectedAuctionItem: null,
};

export const auctionReducer = createReducer(
  initialAuctionState,
  on(AuctionActions.loadAuctions, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuctionActions.loadAuctionsSuccess, (state, { auctions }) => ({
    ...state,
    auctions,
    loading: false,
  })),
  on(AuctionActions.loadAuctionsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AuctionActions.addAuction, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuctionActions.addAuctionSuccess, (state, { auction }) => ({
    ...state,
    auctions: [...state.auctions, auction],
    loading: false,
  })),
  on(AuctionActions.addAuctionFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AuctionActions.setAuctionItem, (state, { auctionItem }) => ({
    ...state,
    selectedAuctionItem: auctionItem,
  })),
  on(AuctionActions.updateAuctionItemBid, (state, { auctionItem }) => {
    const updatedAuctions = state.auctions.map(item =>
      item.name === auctionItem.name ? auctionItem : item
    );

    return {
      ...state,
      auctions: updatedAuctions,
    };
  }),
  on(AuctionActions.updateAuctionItemBid, (state, { auctionItem }) => {
    const updatedAuctions = state.auctions.map(item =>
      item.name === auctionItem.name ? auctionItem : item
    );

    return {
      ...state,
      auctions: updatedAuctions,
    };
  }), 
    on(AuctionActions.updateMaximumBid, (state, { maximumBid }) => {
      if (state.selectedAuctionItem) {
        return {
          ...state,
          selectedAuctionItem: {
            ...state.selectedAuctionItem,
            currentBid: maximumBid,
            // Optionally update other properties if needed
          },
        };
      }
      return state;
    }),
    // Other cases...
  
);