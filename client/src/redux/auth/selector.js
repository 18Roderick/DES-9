import { createSelector } from 'reselect';

const authState = (state) => state.auth;

export const selectToken = createSelector([authState], ({ token }) => token);
