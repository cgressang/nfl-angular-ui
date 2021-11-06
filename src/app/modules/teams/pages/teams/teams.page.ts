import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { TeamsState } from '@shared/store/reducers';
import { ConferenceSelectors } from '@shared/store/selectors';

import { Conference } from '@shared/models/conference.model';


@Component({
  selector: 'teams',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss']
})
export class TeamsPage implements OnInit {
  conferences$: Observable<Conference[]>;

  constructor(private store: Store<TeamsState>) { }

  ngOnInit(): void {
    this.conferences$ = this.store.pipe(select(ConferenceSelectors.getConferences));
  }
}
