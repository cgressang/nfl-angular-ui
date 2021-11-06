import { createSelector } from '@ngrx/store';

import { ConferenceReducer } from '../reducers';
import * as selectors from './base.selectors';


import { Conference } from '@shared/models/conference.model';

import { getCurrentRouteParamType } from '@store/selectors';

export const getConferences = createSelector(
  selectors.getConferenceState,
  ConferenceReducer.selectEntities
);

export const getLoading = createSelector(
  selectors.getConferenceState,
  ConferenceReducer.selectLoading
);

export const getLoaded = createSelector(
  selectors.getConferenceState,
  ConferenceReducer.selectLoaded
);

export const getError = createSelector(
  selectors.getConferenceState,
  ConferenceReducer.selectError
);

export const getConferenceTeam = createSelector(
  getConferences,
  getCurrentRouteParamType,
  (conferences, id: string) => {
    for(let i=0; i<conferences.length; i++) {
      var teams = conferences[i].getTeams();
      if (teams.has(id)) {
        return teams.get(id);
      }
    }
    return null;
  }
);