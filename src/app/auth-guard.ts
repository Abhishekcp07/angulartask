import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from './authservice';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authservice=inject(Authservice);
  const router=inject(Router);
  
  return authservice.islogged()
    ? true
    : router.createUrlTree(['/Login']);
};
