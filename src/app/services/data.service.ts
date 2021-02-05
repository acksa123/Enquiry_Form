import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  history:{
    name:string,email:string,phone:string,message:string
  }[]=[];
  add=(name:string,email:string,phone:string,message:string)=>{
    this.history.push({
      name,email,phone,message
    })
    return 1;
  }
getEnquiries=()=>{
  return this.history;
}

  
}
