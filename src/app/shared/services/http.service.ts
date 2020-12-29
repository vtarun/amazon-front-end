import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  configUrl = "http://localhost:3000/"
  constructor(private http : HttpClient ) { }

  get(): Observable<string> {
    return this.http.get(this.configUrl, {responseType: 'text'}).pipe(
      retry(2),
      catchError(this.handleError)
    )  
  }

  post(){}

  put(){}

  delete(){}

  getJSON(){
    return of(20)
  }

  getTextFile(fileName: string){
    return this.http.get(fileName, {responseType: 'text'}).pipe(
      tap(
        data=>this.log(fileName, data),
        error=>this.log(fileName, error)
        )
      )
  }

  log(fileName, resp){
    console.log(fileName);
    console.log(resp);
  }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    }
    else{
      // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }  
    return throwError(
      'Something bad happened; please try again later.'); 
  }
}
