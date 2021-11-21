import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MailService } from '../_services/mail.service';
import { Mail } from '../models/mail.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {
  isSuccessful = false;
  ngOnInit(){
  }
  
mail : Mail= new Mail();

  constructor(private http: HttpClient, private emailService :MailService,private router: Router) { }

   enviarEmail() {
    this.emailService.enviarEmail(this.mail)
      .subscribe(data => console.log(data));
  }

   onSubmit() {
    this.enviarEmail();
    this.isSuccessful = true;
  }


}
