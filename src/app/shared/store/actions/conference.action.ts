import { createAction, props } from '@ngrx/store';

import { Conference } from '@shared/models/conference.model';


export const LOAD_CONFERENCES = '[Teams] load conferences';
export const loadConferences = createAction(LOAD_CONFERENCES);

export const LOAD_CONFERENCES_SUCCESS = '[Teams] load conferences success';
export const loadConferencesSuccess = createAction(LOAD_CONFERENCES_SUCCESS, props<{ conferences: Conference[] }>());

export const LOAD_CONFERENCES_FAIL = '[Teams] load Conferences fail';
export const loadConferencesFail = createAction(LOAD_CONFERENCES_FAIL, props<{ error: any }>());
