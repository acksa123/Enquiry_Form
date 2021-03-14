import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
 //enquiries:any=[]
 enquiries:{name:string,email:string,phone:string,message:string}[]= [];

  constructor(private dataService:DataService,private router:Router) {
    dataService.getEnquiries()
    .subscribe((data:any)=>{
      this.enquiries=data;
    })
   }

  ngOnInit(): void {
  }
  edit(item:any){
   this.router.navigate(["enquiries",item._id])
   
    }
}
