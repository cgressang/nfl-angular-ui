import { createSelector, createFeatureSelector } from '@ngrx/store';

import { TeamsState } from '../reducers';
import * as fromConference from '../reducers/conference.reducer';
import * as fromTeam from '../reducers/team.reducer';

export const teamsState = createFeatureSelector<TeamsState>('teams');

export const getConferenceState = createSelector(
  teamsState,
  state => state.conferences,
);

export const getTeamState = createSelector(
  teamsState,
  state => state.team,
);