import { Component } from '@angular/core';
import { CategorieService } from '../../../services/categorie.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.css'
})
export class AllCategoriesComponent {

  dataCategorie: any;

  NewDataCategorie = {
    nom: "",
    description: "",
    id: 0
  };

  messageSuccess = '';

  constructor(private Cs: CategorieService) {
    this.loadCategories();
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

  deleteCategorie(categorieId: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce categorie ?")) {
      this.Cs.deleteCategorie(categorieId).subscribe(
        response => {
          console.log("Categorie supprimé avec succès !");
          this.loadCategories();
        },
        error => {
          console.error("Erreur lors de la suppression du categorie :", error);
        }
      );
    }
  }
 
  getcategorie(nom: string, description: string, id: number) {
    this.messageSuccess = '';
    this.NewDataCategorie.nom = nom;
    this.NewDataCategorie.description = description;
    this.NewDataCategorie.id = id;
  }

  
  
  updatenewCategorie(f: any) {
    let data = f.value;
    this.Cs.updateCategorie(this.NewDataCategorie.id, data).subscribe(
      (response: any) => {
        console.log(response);
        let indexId = this.dataCategorie.findIndex((obj: any) => obj.id === this.NewDataCategorie.id);
        this.dataCategorie[indexId].nom = data.nom;
        this.dataCategorie[indexId].description = data.description;
        this.messageSuccess = `Le Categorie ${this.dataCategorie[indexId].nom} est modifié `;
        this.loadCategories();
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }



  
}
