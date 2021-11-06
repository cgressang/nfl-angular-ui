import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { ConferenceActions } from '../actions';
import { ConferenceService } from '@core/http/conference.service';

@Injectable()
export class ConferencesEffects {
  constructor(
    private actions: Actions,
    private conferenceService: ConferenceService
  ) {}

  @Effect()
  loadConferences$ = this.actions.pipe(
    ofType(ConferenceActions.LOAD_CONFERENCES),
    switchMap(() => {
      return this.conferenceService
        .getConferences()
        .pipe(
          map(conferences => ConferenceActions.loadConferencesSuccess({ conferences: conferences })),
          catchError(error => of(ConferenceActions.loadConferencesFail({ error: error })))
        );
    })
  );

}