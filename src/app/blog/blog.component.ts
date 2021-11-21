import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chantier } from '../models/chantier.model';
import { ChantierService } from '../_services/chantier.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  chantiers?: Chantier[];
  currentChantier?: Chantier;
  currentIndex = -1;
  constructor(private chantierService: ChantierService , private router: Router) { }
  ngOnInit(): void {
    this.retrievechantiers();
  }

  retrievechantiers(): void {
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
  refreshList(): void {
    this.retrievechantiers();
    this.currentChantier = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(chantier: Chantier, index: number): void {
    this.currentChantier = chantier;
    this.currentIndex = index;
  }
  
  chantierDetails(id: number){
    this.router.navigate(['portfolio/detail', id]);
  }
  

}

