import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {
  myFormLogin: FormGroup;
  submittedLogin=false;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.myFormLogin=  this.formBuilder.group(
      {
        

      });
  }

  login(myForm:FormGroup){
    this.router.navigate(["/entity"]);
      
  
    
  }

}

