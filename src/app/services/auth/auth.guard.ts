import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{    
    constructor(private authService: AuthService){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        console.log(next);
        console.log(state);
        return this.authService.hasLoggedIn();
    }
}

