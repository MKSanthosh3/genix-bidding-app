import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuctionLandingPageComponent } from './auction-landing-page/auction-landing-page.component';
import { AuctionsComponent } from './auctions.component';
import { BiddingProductDetailsComponent } from './bidding-product-details/bidding-product-details.component';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';
import { AuthGuard } from '../auth/authguard';

const routes: Routes = [
  { path: '', redirectTo: 'auctions-dashboard', pathMatch: 'full' },
  {
    path: 'auctions', component: AuctionsComponent, 
    children: [
      
         { path: 'auctions-dashboard', component: AuctionLandingPageComponent },
         { path: 'bidding', component: BiddingProductDetailsComponent ,canActivate: [AuthGuard]},
         { path: 'welcome', component: AuctionsListComponent,canActivate: [AuthGuard], },
     
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,   
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AuctionsRoutingModule { }
