import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../../../services/commande.service';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent {

  messageSuccess: string = '';
  
  constructor(private commandeService: CommandeService, private router: Router) {}

  add(f: any): void {
    const data = f.value;
    console.log('Données de la commande:', data);
    
    // Assurez-vous que l'objet `Panier` est correctement inclus dans les données envoyées
    const commande = {
      total: data.total,
      panier: {
        id: data.panierId // Assurez-vous que cet ID est valide
      }
    };
    
    this.commandeService.ajouterCommande(commande).subscribe(
      (response) => {
        this.messageSuccess = 'Commande ajoutée avec succès!';
        this.router.navigate(['/admin/allcommandes']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la commande:', error);
        this.messageSuccess = 'Erreur lors de l\'ajout de la commande.';
      }
    );
  }
}
