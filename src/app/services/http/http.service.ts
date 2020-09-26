import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient){}

    get(url, options): Observable<any> {        
         return this.http.get('./assets/test.json').pipe(
             retry(3),
             catchError(this.handleError)
         )
    }
    post(): Observable<any> {
        return this.http.post('', {});
    }
    put(): Observable<any> {
        return this.http.put('', {});
    }
    delete(): Observable<any> {
        return this.http.delete('');
    }

    private handleError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else{
            console.error(error.error);
        }
        return throwError('Something bad happped. Please try after some time.')
    }
}
