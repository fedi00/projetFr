import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private apiUrl = 'http://localhost:8090/panier'; // Base URL de l'API

  constructor(private http: HttpClient) { }

  // Récupérer tous les paniers
  getAllPaniers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`);
  }

  // Créer un nouveau panier
  createPanier(panier: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, panier);
  }

  // Récupérer un panier par ID
  getPanierById(panierId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${panierId}`);
  }

  // Mettre à jour un panier
  updatePanier(panierId: number, panier: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${panierId}`, panier);
  }

  // Supprimer un panier
  deletePanier(panierId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${panierId}`);
  }

  // Augmenter la quantité d'un panier
  increaseQuantity(panierId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/increaseQuantity/${panierId}`);
  }

  // Diminuer la quantité d'un panier
  decreaseQuantity(panierId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/decreaseQuantity/${panierId}`);
  }

  // Ajouter un produit à un panier
  addProduitToPanier(idPanier: number, idProduit: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/addProduitToPanier/${idPanier}/${idProduit}`, {});
  }

  // Supprimer un produit d'un panier
  removeProduitFromPanier(idPanier: number, idProduit: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/removeProduitFromPanier/${idPanier}/${idProduit}`);
  }
}
