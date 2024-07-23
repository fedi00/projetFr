import { Component } from '@angular/core';
import { FactureService } from '../../../../services/facture.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-allfactures',
  templateUrl: './allfactures.component.html',
  styleUrl: './allfactures.component.css'
})
export class AllfacturesComponent {
  dataFactures: any[] = [];
  selectedFacture: any = {
    typePaiement: '',
    facilitePaiement: '',
    commande: {
      id: '' // Ajoutez cet attribut pour l'id de la commande
    }
  };
  messageSuccess = '';

  constructor(private factureService: FactureService) {
    this.loadFactures();
  }

  loadFactures(): void {
    this.factureService.getAllFactures().subscribe(
      (response: any[]) => {
        this.dataFactures = response;
        console.log('Factures chargées:', this.dataFactures);
      },
      (error) => {
        console.error('Erreur lors du chargement des factures', error);
      }
    );
  }

  deleteFacture(factureId: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette facture ?")) {
      this.factureService.deleteFacture(factureId).subscribe(
        response => {
          console.log("Facture supprimée avec succès !");
          this.loadFactures();
        },
        (error: HttpErrorResponse) => {
          console.error("Erreur lors de la suppression de la facture :", error.message);
        }
      );
    }
  }

  selectFacture(facture: any): void {
    this.selectedFacture = {
      ...facture,
      commande: facture.commande || { id: '' }
    };
    this.messageSuccess = '';
  }

  updateFacture(f: any): void {
    const data = f.value;
    // Inclure l'objet complet de la commande dans les données de mise à jour
    data.commande = {
      id: this.selectedFacture.commande.id
    };

    this.factureService.updateFacture(this.selectedFacture.id, data).subscribe(
      response => {
        console.log('Facture mise à jour:', response);
        const indexId = this.dataFactures.findIndex((obj: any) => obj.id === this.selectedFacture.id);
        if (indexId !== -1) {
          this.dataFactures[indexId] = { ...this.dataFactures[indexId], ...data };
        }
        this.messageSuccess = `La facture ${this.selectedFacture.id} est modifiée`;
        this.loadFactures();
      },
      (err: HttpErrorResponse) => {
        console.error('Erreur lors de la mise à jour de la facture:', err.message);
      }
    );
  }
}