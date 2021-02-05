import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
 enquiries:any=[]
 //enquiries:{name:string,email:string,phone:string,message:string}[]= [];

  constructor(private dataService:DataService) {
    this.enquiries=dataService.getEnquiries();
   }

  ngOnInit(): void {
  }

}
