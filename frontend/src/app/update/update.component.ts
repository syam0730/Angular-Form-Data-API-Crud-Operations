import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from '../interaction-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {

  registerform: any
  ID: any;
  constructor(private router: Router, private service: InteractionService, private url: ActivatedRoute) {
    

    this.registerform = new FormGroup({
      ID: new FormControl(''),
      NAME: new FormControl('', [Validators.required, Validators.minLength(3),]),
      LASTNAME: new FormControl('', [Validators.required, Validators.minLength(3),]),
      PHONENUMBER: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10)]),
      EMAILID: new FormControl('', [Validators.required, Validators.email]),
      ADDRESS: new FormControl(''),
      // COUNTRY: new FormControl(''),
      // STATE: new FormControl(''),
      // GENDER: new FormControl(null),
      // VEHICLES: new FormControl(null),
    })
  }
  ngOnInit(): void {
    this.ID = this.url.snapshot.paramMap.get('ID')
    console.log(this.ID)
    this.service.singleData(this.ID).subscribe((data)=> {
      this.registerform.patchValue(data)
    })
  }
  data: any = {};
  preview: string = '';
  suni: string = '';
  fetchID: any = '';
  mynewdb: string = '';
  // updateID: string = '';
  // Register()
  Clickme() {
    
    console.log(this.registerform.value);
    alert(`Thank You Data Will Update Successfully ${this.registerform.value.NAME}`);
    this.suni = JSON.stringify(this.registerform.value);
    this.data.ID = this.registerform.value.ID;
    this.data.NAME = this.registerform.value.NAME;
    this.data.LASTNAME = this.registerform.value.LASTNAME;
    this.data.EMAILID = this.registerform.value.EMAILID;
    this.data.PHONENUMBER = this.registerform.value.PHONENUMBER;
    this.data.ADDRESS = this.registerform.value.ADDRESS;
    this.updateDatafromApi();
    
  }
  updateDatafromApi(){
    this.service.updateData(this.registerform.value).subscribe((response:any) => {
      console.log('Response from API put is', response)
  })
}

}
