import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../../../services/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrl: './add-categorie.component.css'
})
export class AddCategorieComponent {

  constructor(private Cs:CategorieService , private route:Router){}


  
  add(f: any) {
    let data = f.value;
    console.log(data);
    this.Cs. addcategorie(data).subscribe(
      (response) => {
        this.route.navigate(['/admin/allcategories']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
