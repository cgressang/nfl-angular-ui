import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { TeamActions } from '../actions';
import { TeamService } from '@core/http/team.service';

@Injectable()
export class TeamEffects {
  constructor(
    private actions: Actions,
    private teamService: TeamService
  ) {}

  @Effect()
  loadTeam$ = this.actions.pipe(
    ofType(TeamActions.loadTeam),
    switchMap(action => {
      return this.teamService
        .getTeam(action.id)
        .pipe(
          map(team => TeamActions.loadTeamSuccess({ team })),
          catchError(error => of(TeamActions.loadTeamFail({ error })))
        );
    })
  );

}