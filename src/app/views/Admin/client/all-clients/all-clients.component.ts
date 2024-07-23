import { Component } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrl: './all-clients.component.css'
})
export class AllClientsComponent {

  dataClient: any;

  NewDataClient={
    nom:"",
    prenom:"",
    email:"",
    adresse:"",
    telephone:0,
    id:0
  }

  messageSuccess=''

  constructor(private CS: ClientService) {
    this.loadClients();
  }



  loadClients(): void {
    this.CS.getAllClients().subscribe(
      clients => {
        this.dataClient = clients;
      },
      error => {
        console.error("Erreur lors du chargement des clients :", error);
      }
    );
  }

  deleteClient(clientId: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
      this.CS.deleteClient(clientId).subscribe(
        response => {
          console.log("Client supprimé avec succès !");
          // Mettre à jour la liste des clients après la suppression
          this.loadClients();
        },
        error => {
          console.error("Erreur lors de la suppression du client :", error);
        }
      );
    }
  }
  


  getclient(nom: string, prenom:string, email:string, adresse:string, telephone:number,id:number){
    
    this.messageSuccess=''
    this. NewDataClient.nom= nom
    this. NewDataClient.prenom=prenom
    this. NewDataClient.email=email
    this. NewDataClient.adresse=adresse
    this. NewDataClient.telephone=telephone
    this. NewDataClient.id = id; // Convertir en nombre
    
  }


  updatenewClient(f: any) {
    let data = f.value;
    this.CS.updateClient(this. NewDataClient.id, data).subscribe(
      response => {
        console.log(response);
        let indexId=this.dataClient.findIndex((obj:any)=>obj.id==this. NewDataClient.id)
          this.dataClient[indexId].nom= data.nom
          this.dataClient[indexId].prenom= data.prenom
          this.dataClient[indexId].email= data.email
          this.dataClient[indexId].adresse= data.adresse
          this.dataClient[indexId].telephone= data.telephone
        
          this.messageSuccess=`Le Client ${this.dataClient[indexId].nom} est modifié `
        this.loadClients();  // Recharger la liste des clients après la mise à jour
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
