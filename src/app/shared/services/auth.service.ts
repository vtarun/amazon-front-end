import { Injectable } from '@angular/core';

@Injectable()

export class AuthService{
    getAuthorizationToken(){
        return localStorage.getItem('token');
    }
}