import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { auctionReducer } from './auction/auction.reducer';
import { AuctionEffects } from './auction/auction.effects';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
import { biddingReducer } from './bid/bidding.reducer';
import { BiddingEffects } from './bid/bidding.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({
      auction: auctionReducer,
      auth: authReducer,
      bidding: biddingReducer,
    }),
    EffectsModule.forRoot([AuctionEffects, AuthEffects, BiddingEffects]),
  ],
})
export class AuctionAppStoreModule {}