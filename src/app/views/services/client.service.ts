import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8090/clients'; // Base URL de l'API
  constructor(private http: HttpClient) {}




getAllClients(): Observable<any> { 
    return this.http.get(`${this.apiUrl}/list`); 
  }
 

addClient(client: any): Observable<any> { 
  return this.http.post(`${this.apiUrl}/add`, client); 
 }



deleteClient(clientId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${clientId}`);
}

updateClient(clientId:number,newprofile:any){
  return this.http.put(`${this.apiUrl}/${clientId}` ,newprofile);
}




}
