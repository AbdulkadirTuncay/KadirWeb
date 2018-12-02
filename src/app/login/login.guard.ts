import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AccountService} from '../services/account.service';

@Injectable()
export class LoginGuard implements CanActivate {

   constructor(private accountService: AccountService, private router: Router) {

   }

   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const logged = this.accountService.isLoggedIn();

    if (logged) {
        return true;
    }

    this.router.navigate(['account'], {queryParams: { returnUrl: state.url}} );
    return false;
   }
}
