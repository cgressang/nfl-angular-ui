import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Team } from '@shared/models/team.model';

import * as TeamActions from '../actions/team.action';

export interface State {
  // additional entities state properties
  team: Team
  loading: boolean;
  loaded: boolean;
  error: any | null;
}

export const initialState: State = {
  team: new Team({}),
  loading: false,
  loaded: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(TeamActions.loadTeam, (state, action) => {
    return { ...state, loading: true };
  }),
  on(TeamActions.loadTeamSuccess, (state, { team }) => {
    return { ...state, team: team, loading: false, loaded: true };
  }),
  on(TeamActions.loadTeamFail, (state, { error }) => {
    return { ...state, loading: false, loaded: false, error: error }
  }),
  on(TeamActions.resetTeam, (state, action) => {
    return { ...state, team: new Team({}), loading: false, loaded: false, error: null };
  })
);

export const selectTeam = (state: State) => state.team;
export const selectLoading = (state: State) => state.loading;
export const selectLoaded = (state: State) => state.loaded;
export const selectError = (state: State) => state.error;
