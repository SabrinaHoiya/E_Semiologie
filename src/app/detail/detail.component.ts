import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Chantier } from '../models/chantier.model';
import { ChantierService } from '../_services/chantier.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id?: number;
  chantier?: Chantier;

  chantiers?: Chantier[];
  
  constructor(private route: ActivatedRoute,private router: Router,
    private chantierService: ChantierService) { }

  ngOnInit() {
    this.reloadData();

    this.chantier = new Chantier();

    this.id = this.route.snapshot.params['id'];
    
    this.chantierService.getChantier(this.id)
      .subscribe(data => {
        console.log(data)
        this.chantier = data;
      }, error => console.log(error));

      
  }
  reloadData(): void  {
    this.chantierService.getListFiles()
      .subscribe(
        data => {
          this.chantiers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  list(){
    this.router.navigate(['blog']);
  }
}
