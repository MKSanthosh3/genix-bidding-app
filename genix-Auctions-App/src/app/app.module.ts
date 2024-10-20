import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionsModule } from './auctions/auctions.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from 'src/core/store/auth/auth.reducer';
import { auctionReducer } from 'src/core/store/auction/auction.reducer';
import { biddingReducer } from 'src/core/store/bid/bidding.reducer';
import { AuthEffects } from 'src/core/store/auth/auth.effects';
import { AuctionEffects } from 'src/core/store/auction/auction.effects';
import { BiddingEffects } from 'src/core/store/bid/bidding.effects';
import { AuctionAppStoreModule } from 'src/core/store/auction.app,module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuctionsModule,
    SharedModule,
    AuctionAppStoreModule,
    BsDropdownModule.forRoot(),
    NgbModule,
    StoreModule.forRoot({
      auth: authReducer,
      auction: auctionReducer,
      bidding: biddingReducer,
    }),
    EffectsModule.forRoot([AuthEffects,AuctionEffects,BiddingEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
     
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




