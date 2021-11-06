import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Conference } from '@shared/models/conference.model';

import * as ConferenceActions from '../actions/conference.action';

export interface State {
  entities: Conference[];
  loading: boolean;
  loaded: boolean;
  error: any | null;
}

export const initialState: State = {
  entities: [],
  loading: false,
  loaded: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ConferenceActions.loadConferences, (state, action) => {
    return { ...state, loading: true };
  }),
  on(ConferenceActions.loadConferencesSuccess, (state, { conferences }) => {
    return { ...state, loading: false, loaded: true, entities: conferences };
  }),
  on(ConferenceActions.loadConferencesFail, (state, { error }) => {
    return { ...state, loading: false, loaded: false, error: error}
  })
);

export const selectEntities = (state: State) => state.entities;
export const selectLoading = (state: State) => state.loading;
export const selectLoaded = (state: State) => state.loaded;
export const selectError = (state: State) => state.error;