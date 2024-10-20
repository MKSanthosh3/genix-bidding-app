import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuctionsModule } from './auctions/auctions.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/authguard';

const routes: Routes = [
  { path: '', redirectTo: '/auctions/auctions-dashboard', pathMatch: 'full' },
  { path: 'auctions', loadChildren: () => import('./auctions/auctions.module').then(m => m.AuctionsModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), AuctionsModule, AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
