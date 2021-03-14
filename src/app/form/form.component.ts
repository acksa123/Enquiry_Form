import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  loginForm=this.fb.group({
    name:["",[Validators.required]],
    email:["",[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    phone:["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    // ^((\\+91-?)|0)?[0-9]{10}$"
    message:["",[Validators.required]]
  })
  constructor(private router:Router,private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  
  submit(){
    if(this.loginForm.valid==false){
      alert("Invalid form");
    }
    else{
    const name=this.loginForm.value.name;
    const email=this.loginForm.value.email;
    const phone=this.loginForm.value.phone;
    const message=this.loginForm.value.message;
    // const user=this.dataService.add(name,email,phone,message) ;
  //   if(user==1){
  //   alert("submitted successfully!");
  //   // console.log(this.loginForm);
  //   // console.log(this.loginForm.value);
    
  
  //   this.router.navigateByUrl("/history");
  // }
   this.dataService.add(name,email,phone,message)
   .subscribe((data:any)=>{
    alert(data.message);
    console.log((data));
    this.router.navigateByUrl("/history");
    
  })
  
}

  }
}

