import { createAction, props } from '@ngrx/store';

import { Team } from '@shared/models/team.model';


export const LOAD_TEAM = '[Team] load team';
export const loadTeam = createAction(LOAD_TEAM, props<{ id: number }>());

export const LOAD_TEAM_SUCCESS = '[Team] load team success';
export const loadTeamSuccess = createAction(LOAD_TEAM_SUCCESS, props<{ team: Team }>());

export const LOAD_TEAM_FAIL = '[Team] load team fail';
export const loadTeamFail = createAction(LOAD_TEAM_FAIL, props<{ error: any }>());

export const RESET_TEAM = '[Team] reset team';
export const resetTeam = createAction(RESET_TEAM);