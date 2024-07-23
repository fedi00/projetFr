import { Component } from '@angular/core';
import { ProduitService } from '../../../services/produit.service';
import { CategorieService } from '../../../services/categorie.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-produit',
  templateUrl: './all-produit.component.html',
  styleUrls: ['./all-produit.component.css']
})
export class AllProduitComponent {
  dataProduit: any[] = [];
  dataCategorie: any[] = [];
  imageFile: File | null = null;
  NewDataProduit = {
    nom: "",
    description: "",
    prix: "0",
    stock: "0",
    category: "",
    image: null,
    id: 0
  };

  messageSuccess = '';

  constructor(private Ps: ProduitService, private Cs: CategorieService) {
    this.loadProduits();
    this.loadCategories();
  }

  loadProduits(): void {
    this.Ps.getallproducts().subscribe(
      (response: any[]) => {
        this.dataProduit = response.map((product: any) => ({ ...product }));
        console.log('Produits chargés:', this.dataProduit);
      },
      (error) => {
        console.error('Erreur lors du chargement des produits', error);
      }
    );
  }

  loadCategories(): void {
    this.Cs.getallcategories().subscribe(
      categories => {
        this.dataCategorie = categories;
      },
      error => {
        console.error("Erreur lors du chargement des categories :", error);
      }
    );
  }

  deleteProduct(produitId: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      this.Ps.deleteProduct(produitId).subscribe(
        response => {
          console.log("Produit supprimé avec succès !");
          this.loadProduits();
        },
        error => {
          console.error("Erreur lors de la suppression du produit :", error);
        }
      );
    }
  }

  getproduit(nom: string, description: string, prix: number, stock: number, category: string, id: number): void {
    this.messageSuccess = '';
    this.NewDataProduit.nom = nom;
    this.NewDataProduit.description = description;
    this.NewDataProduit.prix = prix.toString();
    this.NewDataProduit.stock = stock.toString();
    this.NewDataProduit.category = category;
    this.NewDataProduit.id = id;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      this.NewDataProduit.image = file;  // Mettez à jour NewDataProduit.image avec le fichier sélectionné
    }
  }

  updatenewProduit(f: any): void {
    const data = f.value;
  
    // Vérifiez si l'image est sélectionnée
    if (!this.imageFile && !data.image) {
      console.error('Aucune image sélectionnée');
      return;
    }
  
    // Assurez-vous que la catégorieId est correctement assignée
    const categorieId = Number(data.categorieId);
  
    // Si la catégorieId n'est pas valide (par exemple, 0), utilisez celle de NewDataProduit
    if (!categorieId || isNaN(categorieId)) {
      console.error('ID de catégorie invalide');
      return;
    }
  
    this.Ps.updateProduit(
      this.NewDataProduit.id,
      data.nom || '',  // Valeur par défaut si nom est undefined
      data.description || '',  // Valeur par défaut si description est undefined
      data.prix !== undefined ? Number(data.prix) : 0,  // Valeur par défaut si prix est undefined
      data.stock !== undefined ? Number(data.stock) : 0,  // Valeur par défaut si stock est undefined
      this.imageFile || data.image || null,  // Utilisez imageFile ou data.image, sinon null
      categorieId  // Assurez-vous que categorieId est correct
    ).subscribe(
      response => {
        console.log(response);
        const indexId = this.dataProduit.findIndex((obj: any) => obj.id === this.NewDataProduit.id);
        if (indexId !== -1) {
          this.dataProduit[indexId] = { ...this.dataProduit[indexId], ...data };
        }
        this.messageSuccess = `Le produit ${this.dataProduit[indexId].nom} est modifié`;
        this.loadProduits();
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}  