import { Component } from '@angular/core';
import { CommandeService } from '../../../services/commande.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-commandes',
  templateUrl: './all-commandes.component.html',
  styleUrls: ['./all-commandes.component.css']
})
export class AllCommandesComponent {

  dataCommandes: any[] = [];
  selectedCommande: any = {
    total: 0,
    dateCommande: '',
    client: {
      id: '' // Ajoutez cet attribut pour l'id du client
    }
  };
  messageSuccess = '';

  constructor(private commandeService: CommandeService) {
    this.loadCommandes();
  }

  loadCommandes(): void {
    this.commandeService.getAllCommandes().subscribe(
      (response: any[]) => {
        this.dataCommandes = response.map((commande: any) => {
          console.log('Date reçue:', commande.dateCommande);
          return {
            ...commande,
            dateCommande: this.convertToDate(commande.dateCommande)
          };
        });
        console.log('Commandes chargées:', this.dataCommandes);
      },
      (error) => {
        console.error('Erreur lors du chargement des commandes', error);
      }
    );
  }

  convertToDate(dateArray: any): Date {
    if (Array.isArray(dateArray)) {
      const [year, month, day, hour = 0, minute = 0] = dateArray;
      const jsMonth = month - 1;
      return new Date(year, jsMonth, day, hour, minute);
    } else {
      console.error('Date invalide:', dateArray);
      return new Date();
    }
  }

  deleteCommande(commandeId: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette commande ?")) {
      this.commandeService.deleteCommande(commandeId).subscribe(
        response => {
          console.log("Commande supprimée avec succès !");
          this.loadCommandes();
        },
        (error: HttpErrorResponse) => {
          console.error("Erreur lors de la suppression de la commande :", error.message);
        }
      );
    }
  }

  selectCommande(commande: any): void {
    this.selectedCommande = {
      ...commande,
      client: commande.client || { id: '' }
    };
    this.messageSuccess = '';
  }

  updateCommande(f: any): void {
    const data = f.value;
    // Inclure l'objet complet du client dans les données de mise à jour
    data.client = {
      id: this.selectedCommande.client.id
    };
  
    this.commandeService.updateCommande(this.selectedCommande.id, data).subscribe(
      response => {
        console.log('Commande mise à jour:', response);
        const indexId = this.dataCommandes.findIndex((obj: any) => obj.id === this.selectedCommande.id);
        if (indexId !== -1) {
          this.dataCommandes[indexId] = { ...this.dataCommandes[indexId], ...data };
        }
        this.messageSuccess = `La commande ${this.selectedCommande.id} est modifiée`;
        this.loadCommandes();
      },
      (err: HttpErrorResponse) => {
        console.error('Erreur lors de la mise à jour de la commande:', err.message);
      }
    );
  }
}
