import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { TeamsState } from '@shared/store/reducers';
import { ConferenceSelectors } from '@shared/store/selectors';
import { ConferenceActions } from '@shared/store/actions';

@Injectable({
  providedIn: 'root'
})
export class LoadConferencesGuard implements CanActivate {
  constructor(private store: Store<TeamsState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkStore();
  }

  checkStore(): Observable<boolean> {
    return this.store.select(ConferenceSelectors.getLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(ConferenceActions.loadConferences());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

}
