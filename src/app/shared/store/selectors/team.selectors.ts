import { createSelector } from '@ngrx/store';

import { TeamReducer } from '../reducers';
import * as selectors from './base.selectors';

import { Team } from '@shared/models/team.model';

export const getTeam = createSelector(
  selectors.getTeamState,
  TeamReducer.selectTeam
);

export const getLoading = createSelector(
  selectors.getTeamState,
  TeamReducer.selectLoading
);

export const getLoaded = createSelector(
  selectors.getTeamState,
  TeamReducer.selectLoaded
);

export const getError = createSelector(
  selectors.getTeamState,
  TeamReducer.selectError
);