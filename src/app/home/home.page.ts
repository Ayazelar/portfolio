import { Component, OnInit } from '@angular/core';
import * as DataService from '../services/bucket'
import { About_Me } from './../services/bucket';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: DataService.About_Me;
  age: number = 0;
  quentity: number=2;
  fact= new Array(4);
  portfolio: DataService.Portfolio[]=[];
  service: DataService.Service[]=[];
  reference: DataService.Reference[]= [];

  constructor() {
    DataService.initialize({ apikey: "1lgsn519kvkmsk51" })
  }

  async ngOnInit() {
    
    this.getUser();
    this.getPortfolio();
    this.getService();
    this.getReference();

  }
  calculateAge(birthday) {
    let month_diff = Date.now() - birthday.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return age
  }
  async getUser(){
    this.user = await DataService.about_me.get(environment.userId)
    if (this.user) {
      this.age = this.calculateAge(new Date(this.user.birthday))
    }
  }
  async getPortfolio(){
    DataService.portfolio.getAll({ queryParams: { limit: this.quentity } } ).then((res)=>{
      this.portfolio=res;
    })
    
  }
  async getService(){
    DataService.service.getAll().then((res)=>{
      this.service=res;
    })
    
  }
  async getReference(){
    DataService.reference.getAll().then((res)=>{
      this.reference=res;
    })
    
  }
  async loadMore(){
    this.quentity = this.quentity+2;
    this.getPortfolio()
  }
}
