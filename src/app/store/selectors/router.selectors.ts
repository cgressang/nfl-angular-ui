import { RouterStateUrl } from '@core/http/custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getCurrentRoute = createSelector(getRouterState, (router) => {
	return router.state;
});

export const getCurrentRouteParams = createSelector(getCurrentRoute, (route) => {
	return route.params;
});

export const getCurrentRouteParamType = createSelector(getCurrentRouteParams, (params) => {
	return params['type'];
});