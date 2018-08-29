import { Injectable } from '@angular/core'
import { AccountService } from './account.service'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private accountService: AccountService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.accountService.isLoggedIn();

        if (logged) {
            return true;
        }
        this.router.navigate(["account"], { queryParams: { returnUrl: state.url } });
        return false;

    }
}