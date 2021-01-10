import { Component, OnInit } from '@angular/core';
import {CovidTrackingService} from '../covid-tracking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public testedData = {};
  public recoveredData ={};
 
  constructor(private _covidTrackingService: CovidTrackingService) { }

  ngOnInit() {
    this.getTrackingData();
  }

  getTrackingData() {
   this._covidTrackingService.getTotaltested().subscribe(
     (data) => { 
     this.testedData['testedMh'] = 0;
     this.testedData['testedKa'] = 0;
     this.testedData['testedPu'] = 0;
     this.testedData['testedRa'] = 0;
     this.testedData['testedKe'] = 0;
     for(let element of data['states_tested_data']) {
       if(element['state'] === 'Maharashtra') {
        this.testedData['testedMh'] = +this.testedData['testedMh'] + +element.totaltested
       } else if(element['state'] === 'Karnataka') {
        this.testedData['testedKa'] = +this.testedData['testedKa'] + +element.totaltested
       }
       else if(element['state'] === 'Punjab') {
        this.testedData['testedPu'] = +this.testedData['testedPu'] + +element.totaltested
       }
       else if(element['state'] === 'Rajasthan') {
        this.testedData['testedRa'] = +this.testedData['testedRa'] + +element.totaltested
       }
       else if(element['state'] === 'Kerala') {
        this.testedData['testedKe'] = +this.testedData['testedKe'] + +element.totaltested
       }     
     }    
    }
  );

  this._covidTrackingService.getTotalRecovered().subscribe((data)=>{
    console.log(data);
    for(let element of data['states_daily']) {
      console.log(element["tn"]);
      
    }
  })
  }

}
