import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable() 

export class AuthGuard implements CanActivate{

    constructor(private auth: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){        
        if(this.auth.getAuthorizationToken()){
            return true;
        }        
    }
}