import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  private apiUrl = 'http://localhost:8090/produits'; // Base URL de l'API
  constructor(private http: HttpClient) {}



  
  getallproducts(): Observable<any> { 
    return this.http.get(`${this.apiUrl}/list`); 
 }
 

 addProduct(nom: string,description: string,prix: number,stock: number,image: File,categorieId: number): Observable<any> { 
   const formData = new FormData();
  formData.append('nom', nom);
  formData.append('description', description);
  formData.append('prix', prix.toString());
  formData.append('stock', stock.toString());
  formData.append('categorieId', categorieId.toString());
  formData.append('image', image);

  // Envoyer la requête POST avec FormData
  return this.http.post<any>(`${this.apiUrl}/add`, formData);
}

deleteProduct(produitId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${produitId}`);
}


updateProduit(produitId: number, nom: string, description: string, prix: number, stock: number, image: File | null, categorieId: number) {
  const formData: FormData = new FormData();
  formData.append('nom', nom || '');  // Valeur par défaut si nom est undefined
  formData.append('description', description || '');  // Valeur par défaut si description est undefined
  formData.append('prix', (prix !== undefined && prix !== null) ? prix.toString() : '0');  // Valeur par défaut si prix est undefined
  formData.append('stock', (stock !== undefined && stock !== null) ? stock.toString() : '0');  // Valeur par défaut si stock est undefined
  if (image) {
    formData.append('image', image);
  }
  formData.append('categorieId', (categorieId !== undefined && categorieId !== null) ? categorieId.toString() : '0');  // Valeur par défaut si categorieId est undefined

  return this.http.put(`${this.apiUrl}/modif/${produitId}`, formData);
}


}
