import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BiddingActions from './bidding.actions';
import { BiddingService } from './bidding.service';


@Injectable()
export class BiddingEffects {
  constructor(
    private actions$: Actions,
    private biddingService: BiddingService
  ) {}

  placeBid$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BiddingActions.placeBid),
      mergeMap(({ auctionId, bidAmount }) =>
        this.biddingService.placeBid(auctionId, bidAmount).pipe(
          map((bid) => BiddingActions.placeBidSuccess({ bid })),
          catchError((error) => of(BiddingActions.placeBidFailure({ error })))
        )
      )
    )
  );

  loadBids$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BiddingActions.loadBids),
      mergeMap(({ auctionId }) =>
        this.biddingService.getBids(auctionId).pipe(
          map((bids) => BiddingActions.loadBidsSuccess({ bids })),
          catchError((error) => of(BiddingActions.loadBidsFailure({ error })))
        )
      )
    )
  );
}