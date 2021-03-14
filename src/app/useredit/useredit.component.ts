import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  profileForm = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    phone: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

    message: ["", [Validators.required]]
  })
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.route.paramMap.subscribe((params: any) => {
      //     console.log(params);

      //  alert(params.params.id);

      const userId = params.params.id;
      console.log(userId);

      dataService.getUserProfile(userId)
        .subscribe((data: any) => {
          this.profileForm.patchValue({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
          })
        })
    })
  }

  ngOnInit(): void {
  }
  update() {
    if (this.profileForm.valid == false) {
      alert("Invalid data")
    }
    else {

      const name = this.profileForm.value.name;
      const email = this.profileForm.value.email;
      const phone = this.profileForm.value.phone;
      const message = this.profileForm.value.message;
      this.route.paramMap.subscribe((params: any) => {
        const userId = params.params.id;
        this.dataService.update(name, email, phone, message, userId)
          .subscribe((data: any) => {
            alert(data.message)
          })
      })
    }
  }
}
