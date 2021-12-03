import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { TeamsState } from '@shared/store/reducers';
import { ConferenceSelectors, TeamSelectors } from '@shared/store/selectors';
import { TeamActions } from '@shared/store/actions';

import { Team } from '@shared/models/team.model';

@Component({
  selector: 'team-info-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-info.page.html',
  styleUrls: ['./team-info.page.scss']
})
export class TeamInfoPage implements OnInit {
  team$: Observable<Team>;

  constructor(private store: Store<TeamsState>) { }

  ngOnInit(): void {
    this.team$ = this.store.pipe(select(ConferenceSelectors.getConferenceTeam));
  }
}
