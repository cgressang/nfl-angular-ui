import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import { Team } from '@shared/models/team.model';

import { TeamsState } from '@shared/store/reducers';
import { ConferenceSelectors } from '@shared/store/selectors';
import { TeamActions } from '@shared/store/actions';

@Injectable({
  providedIn: 'root'
})
export class HasTeamGuard implements CanActivate {
  constructor(private router: Router, private store: Store<TeamsState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore();
  }

  checkStore(): Observable<boolean> {
    return this.store.select(ConferenceSelectors.getConferenceTeam).pipe(
      map((conferenceTeam: Team) => {
        if (conferenceTeam) {
          return true;
        }
        this.router.navigate(['']);
        return false;
      }),
    );
  }

}