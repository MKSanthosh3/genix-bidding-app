import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap,switchMap, withLatestFrom } from 'rxjs/operators';
import * as AuctionActions from './auction.actions';
import { AuctionService } from './auction.service';
import { Router } from '@angular/router';
import { AuctionState } from './auction.reducer';
import { selectAuctionState } from './auction.selector';



@Injectable()
export class AuctionEffects {
  constructor(
    private actions$: Actions,
    private auctionService: AuctionService,
    private router: Router,
    private store: Store<AuctionState>
  ) {}

  loadAuctions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuctionActions.loadAuctions),
      mergeMap(() =>
        this.auctionService.getAllAuctions().pipe(
          map((auctions) => AuctionActions.loadAuctionsSuccess({ auctions })),
          catchError((error) => of(AuctionActions.loadAuctionsFailure({ error })))
        )
      )
    )
  );

  addAuction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuctionActions.addAuction),
      mergeMap(({ title, description, startingBid, bidEndDate }) =>
        this.auctionService.addAuction({ title, description, startingBid, bidEndDate }).pipe(
          map((auction) => AuctionActions.addAuctionSuccess({ auction })),
          catchError((error) => of(AuctionActions.addAuctionFailure({ error })))
        )
      )
    )
  );

  navigateToCatalog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuctionActions.setAuctionItem),
        tap(({ auctionItem }) => {
          this.router.navigate(['/auctions/bidding'], {
            state: { auctionItem },
          });
        })
      ),
    { dispatch: false }
  );

  // updateAuctionItemBid$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuctionActions.updateAuctionItemBid),
  //     withLatestFrom(this.store.select(selectAuctionState)),
  //     switchMap(([action, state]) =>
  //       this.auctionService.updateAuctionItem(action.auctionItem).pipe(
  //         map((updatedItem) => AuctionActions.updateAuctionItemBidSuccess({ auctionItem: updatedItem })),
  //         catchError((error) => of(AuctionActions.updateAuctionItemBidFailure({ error: error.message })))
  //       )
  //     )
  //   )
  // );
}