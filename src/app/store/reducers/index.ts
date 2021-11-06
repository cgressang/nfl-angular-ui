import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';


export interface State {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [storeFreeze];
