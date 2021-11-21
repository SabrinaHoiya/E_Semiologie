import { Component, OnInit } from '@angular/core';
import { Devis } from 'src/app/models/devis.model';
import { DevisService } from 'src/app/_services/devis.service';


@Component({
  selector: 'app-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.css']
})
export class AddDevisComponent implements OnInit {
  isSuccessful=false ;
  devis: Devis = {
    sujet: '',
    description: '',
    email: '',
    nomprenom:''
  };
  submitted = false;

  constructor(private devisService: DevisService) { }

  ngOnInit(): void {
  }

  saveDevis(): void {
    const data = {
      sujet: this.devis.sujet,
      description: this.devis.description,
      email: this.devis.email,
      nomprenom: this.devis.nomprenom
    };

    this.devisService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.isSuccessful=true;
        },
        error => {
          console.log(error);
        });
  }

  newDevis(): void {
    this.submitted = false;
    this.devis = {
       sujet: '',
    description: '',
    email: '',
    nomprenom:''
    };
  }

}
