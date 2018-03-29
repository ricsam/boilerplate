import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

export const selectGlobal = (state) => state.get('global');

export const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

