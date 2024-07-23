import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = 'http://localhost:8090/categories'; // Base URL de l'API

  constructor(private http: HttpClient) {}



  getallcategories(): Observable<any> { 
      return this.http.get(`${this.apiUrl}/list`); // Utilisation des guillemets inversés
    }

  addcategorie(categorie: any): Observable<any> { 
      return this.http.post(`${this.apiUrl}/add`, categorie); 
    }
     

  deleteCategorie(categorieId: number): Observable<any> { 
      return this.http.delete(`${this.apiUrl}/${categorieId}`); 
  }
  

 

  updateCategorie(categorieId: number, newCategorie: any) {
    return this.http.put(`${this.apiUrl}/${categorieId}`, newCategorie);
  }
  

 
}
