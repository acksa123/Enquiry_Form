import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient){
    
  }
  history:{
    name:string,email:string,phone:string,message:string
  }[]=[];
  add=(name:string,email:string,phone:string,message:string)=>{
   return this.http.post(apiUrl+"/submit",{
        
   "name":name,
   "email":email,
   "phone":phone,
   "message":message
    });
    // this.history.push({
    //   name,email,phone,message
    // })
    // return 1;
  }
getEnquiries=()=>{
  return this.http.get(apiUrl+"/history");
}
// getDetails=()=>{
//   return this.http.get(apiUrl+"/enquiries")
// }
getUserProfile=(userId:any)=>{
  return this.http.get(apiUrl+"/enquiries/"+userId)
}
update(name:string,email:string,phone:Number,message:string,userId:any){//1.url 2.data 3.header
  return this.http.put(apiUrl+"/update/"+userId,{
name,
email,
phone,
message,
userId

  });
  }

}
