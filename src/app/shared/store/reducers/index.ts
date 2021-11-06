import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as ConferenceReducer from './conference.reducer';
import * as TeamReducer from './team.reducer';
import * as RootReducer from '@store/reducers';

export interface TeamsState {
  conferences: ConferenceReducer.State;
  team: TeamReducer.State;
}

export interface State extends RootReducer.State {
  teams: TeamsState;
}

export const reducers: ActionReducerMap<TeamsState> = {
  conferences: ConferenceReducer.reducer,
  team: TeamReducer.reducer
};

export { ConferenceReducer, TeamReducer };