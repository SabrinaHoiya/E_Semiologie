import { Component, OnInit } from '@angular/core';
import { Devis } from 'src/app/models/devis.model';
import { DevisService } from 'src/app/_services/devis.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  tutorials?: Devis[];
  currentIndex = -1;
  currentTutorial?: Devis;
  isSuccessful=false ;
  constructor(private tutorialService: DevisService,private router:Router) { }

  ngOnInit(): void {
    this.retrieveDevis();
    

  }
  retrieveDevis(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
 
  refreshList(): void {
    this.retrieveDevis();
    this.currentTutorial=undefined ;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Devis, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial?.id)
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
          this.isSuccessful=true;
        },
        error => {
          console.log(error);
        });
  }
  repondre(): void {
    this.router.navigate(['/sendmail']);}

}
