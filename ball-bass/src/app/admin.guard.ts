import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('token')) {
    return false;
  }
  // if valid token
  return true;
};
