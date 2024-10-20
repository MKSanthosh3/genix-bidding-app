import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';
import { AuctionLandingPageComponent } from './auction-landing-page/auction-landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuctionsComponent } from './auctions.component';
import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsNavbarComponent } from './auctions-navbar/auctions-navbar.component';
import { BidDialogComponent } from './bid-dialog/bid-dialog.component';
import { BiddingProductDetailsComponent } from './bidding-product-details/bidding-product-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
    AuctionsListComponent,    
    AuctionLandingPageComponent,
    AuctionsComponent,
    AuctionsNavbarComponent,
    BidDialogComponent,
    BiddingProductDetailsComponent,    
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuctionsRoutingModule,  
    FormsModule,  
    NgbModule,  
  ]
})
export class AuctionsModule { }
