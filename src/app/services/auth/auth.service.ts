import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    isLoggedIn: boolean = false;

    login(){
        return of(true).pipe(delay(100), tap(val => this.isLoggedIn = true));
    }

    loggedOut(){
        return of(true).pipe(delay(100), tap(val => this.isLoggedIn = false));        
    }
    hasLoggedIn(){
        return this.isLoggedIn;
    }

}