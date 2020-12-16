import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()

export class HttpService{
    constructor(private http: HttpClient){}

    get(){
        return of('data');
    }
}