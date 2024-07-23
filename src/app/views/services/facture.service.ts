import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private apiUrl = 'http://localhost:8090/facture';

  constructor(private http: HttpClient) { }

  getAllFactures(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`).pipe(
      catchError(this.handleError)
    );
  }

  getFactureById(factureId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${factureId}`).pipe(
      catchError(this.handleError)
    );
  }

  addFacture(facture: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, facture).pipe(
      catchError(this.handleError)
    );
  }

  updateFacture(factureId: number, facture: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/modifier/${factureId}`, facture).pipe(
      catchError(this.handleError)
    );
  }

  deleteFacture(factureId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${factureId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    return throwError('Something bad happened; please try again later.');
  }
}
