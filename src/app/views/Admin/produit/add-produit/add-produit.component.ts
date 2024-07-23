import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../../../services/produit.service';
import { CategorieService } from '../../../services/categorie.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
  produit: any = {};
  imageFile!: File;
  dataCategorie: any;

  constructor(private produitService: ProduitService, private categorieService: CategorieService, private route: Router) {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categorieService.getallcategories().subscribe(
      categories => {
        this.dataCategorie = categories;
        console.log("Catégories chargées:", this.dataCategorie);
      },
      error => {
        console.error("Erreur lors du chargement des catégories :", error);
      }
    );
  }

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  add(f: any): void {
    if (f.valid) {
      let data = f.value;
  
      console.log("Catégories disponibles:", this.dataCategorie);
      console.log("ID de la catégorie sélectionnée:", data.category);
  
      // Trouver la catégorie sélectionnée
      const selectedCategory = this.dataCategorie.find((cat: any) => cat.id === parseInt(data.category));
      if (selectedCategory) {
        data.category = selectedCategory.id; // Assurez-vous de garder seulement l'ID
      } else {
        console.error('Catégorie non trouvée');
        return;
      }
  
      // Ajoutez l'image au formData avant l'appel du service
      if (this.imageFile) {
        this.produitService.addProduct(
          data.nom, // Assurez-vous que `nom` est présent dans les données du formulaire
          data.description, // Assurez-vous que `description` est présent dans les données du formulaire
          data.prix, // Assurez-vous que `prix` est présent dans les données du formulaire
          data.stock, // Assurez-vous que `stock` est présent dans les données du formulaire
          this.imageFile,
          data.category
        ).subscribe(
          (response) => {
            console.log('Produit ajouté avec succès', response);
            this.route.navigate(['/admin/allproduits']);
          },
          (error) => {
            console.error('Erreur lors de l\'ajout du produit', error);
          }
        );
      } else {
        console.error('Aucun fichier sélectionné');
      }
    } else {
      console.error('Formulaire invalide');
    }
  }
    
}
