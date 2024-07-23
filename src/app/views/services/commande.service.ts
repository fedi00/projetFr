import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiUrl = 'http://localhost:8090/commandes'; // Remplacez par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  // Récupérer toutes les commandes
  getAllCommandes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`).pipe(
      catchError(this.handleError<any[]>('getAllCommandes', []))
    );
  }

  // Ajouter une nouvelle commande
  ajouterCommande(commande: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, commande).pipe(
      catchError(this.handleError<any>('ajouterCommande'))
    );
  }

  // Supprimer une commande
  deleteCommande(commandeId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${commandeId}`).pipe(
      catchError(this.handleError<any>('deleteCommande'))
    );
  }

  // Mettre à jour une commande
  updateCommande(commandeId: number, commande: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/modifier/${commandeId}`, commande).pipe(
      catchError(this.handleError<any>('updateCommande'))
    );
  }

  // Récupérer une commande par son ID
  getCommande(commandeId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${commandeId}`).pipe(
      catchError(this.handleError<any>('getCommande'))
    );
  }

  // Gestion des erreurs
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} échoué: ${error.message}`);
      return of(result as T);
    };
  }
}
