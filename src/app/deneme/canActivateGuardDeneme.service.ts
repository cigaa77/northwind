import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AccountService } from "../account/account.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CanActivateGuardDeneme implements CanActivate {
    constructor(private _accountService:AccountService,private _router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        const loog = this._accountService.isLoggedIn();
        if(loog){
            return true;
        }
        else
        {
            this._router.navigate(['account']);
            return false;
        }

    }

}