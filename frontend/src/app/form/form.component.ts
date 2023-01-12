import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  title = 'nodeform';
  registerform: any
  constructor(private router: Router, private service: InteractionService) {
    

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
  data: any = {};
  preview: string = '';
  suni: string = '';
  fetchID: any = '';
  mynewdb: string = '';
  // updateID: string = '';
  // Register()
  Clickme() {
    
    console.log(this.registerform.value);
    alert(`Thank you ${this.registerform.value.NAME}`);
    this.suni = JSON.stringify(this.registerform.value);
    this.data.ID = this.registerform.value.ID;
    this.data.NAME = this.registerform.value.NAME;
    this.data.LASTNAME = this.registerform.value.LASTNAME;
    this.data.EMAILID = this.registerform.value.EMAILID;
    this.data.PHONENUMBER = this.registerform.value.PHONENUMBER;
    this.data.ADDRESS = this.registerform.value.ADDRESS;
    this.postDatafromApi()
    
  }
  // GetData() {
  //   console.log(this.registerform.valueOf);
  //   alert(`Thank you ${this.registerform.value.NAME}`);
    
  //   this.getData()
  // }





  ngOnInit() {
    this.getData();
    this.postDatafromApi();
   
  }
  
  
  getData() {
    this.service.getData().subscribe((response: any) => {
      console.log('response from API is ', response)
      this.fetchID = response;
    }, (error) => {
      console.log('error is', error);
    })
  }
  postDatafromApi() {
    this.service.postData(this.data).subscribe((response) => {
      console.log('Response from API Post is', response)
      this.preview = JSON.stringify(response);
    }, (error) => {
      console.log('Error is ', error)
    })
  }

  // putupdateID(data:any) {
  //   this.service.putUpdate(data.ID).subscribe((response: any) => {
  //     console.log('response from API is ', response)

  //   })
    
  //     // }, (error) => {
  //     //   console.log('error is', error);
  //     // })
    
  // }
  del(data: any) {
    this.service.delete(data.ID).subscribe((data: any) => {
      alert(`Thank you Data Was Deleted Successfully ${this.registerform.value.NAME}`);
      console.log(data);
    })
  }
  //     console.log('response from API is ', response)
  //   }, (error: any) => {
  //     console.log('error is', error);
  //   })
  
  // }


} 


