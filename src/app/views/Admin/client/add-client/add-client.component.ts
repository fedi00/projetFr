import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {

  constructor(private Cs:ClientService , private route:Router){}
  
  


  add(f: any) {
    let data = f.value;
    console.log(data);
    this.Cs.addClient(data).subscribe(
      (response) => {
        this.route.navigate(['/admin/allclients']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
