import { Component, OnInit } from '@angular/core';
import { CovidTrackingService } from '../covid-tracking.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public testedData = {};
  public recoveredData = {};
  private myChart;
  constructor(private _covidTrackingService: CovidTrackingService) { }

  ngOnInit() {
    this.getTrackingData();
  }

  getTrackingData() {
    //total tested tracking
    this._covidTrackingService.getTotaltested().subscribe(
      (data) => {
        this.testedData['testedMh'] = 0;
        this.testedData['testedKa'] = 0;
        this.testedData['testedPu'] = 0;
        this.testedData['testedRa'] = 0;
        this.testedData['testedKe'] = 0;
        for (let element of data['states_tested_data']) {
          if (element['state'] === 'Maharashtra') {
            this.testedData['testedMh'] = +this.testedData['testedMh'] + +element.totaltested
          } else if (element['state'] === 'Karnataka') {
            this.testedData['testedKa'] = +this.testedData['testedKa'] + +element.totaltested
          }
          else if (element['state'] === 'Punjab') {
            this.testedData['testedPu'] = +this.testedData['testedPu'] + +element.totaltested
          }
          else if (element['state'] === 'Rajasthan') {
            this.testedData['testedRa'] = +this.testedData['testedRa'] + +element.totaltested
          }
          else if (element['state'] === 'Kerala') {
            this.testedData['testedKe'] = +this.testedData['testedKe'] + +element.totaltested
          }
        }
        let ctx = document.getElementById('myChart');
        this.myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Maharashtra', 'Karnataka'],
            datasets: [{
              label: '# of Votes',
              data: [this.testedData["testedMh"], this.testedData["testedKa"]],
              backgroundColor: [
                '#0000cd',
                '#FCCEEC'
              ],
              borderColor: [0],
              borderWidth: 0
            }]
          },
          options: {
            scales: {
              yAxes: [{
                display: false
              }]
            }
          }
        });

      }
    );

    //recovered tracking
    this._covidTrackingService.getTotalRecovered().subscribe((data) => {
      let recoveredData = {};
      recoveredData['october'] = 0;
      recoveredData['november'] = 0;
      recoveredData['december'] = 0;
      for (let element of data['states_daily']) {
        let dataStart = new Date("2020-09-30");
        let dataEnd = new Date("2021-01-01");
        let currData = new Date(element['dateymd']);
        if ((currData > dataStart) && (currData < dataEnd)) {
          if (element['status'] === "Recovered") {
            if (currData.getMonth() === 9) {
              recoveredData['october'] = recoveredData['october'] + +element['tn'];
            }
            else if (currData.getMonth() === 10) {
              recoveredData['november'] = recoveredData['october'] + +element['tn'];
            }
            else if (currData.getMonth() === 11) {
              recoveredData['december'] = recoveredData['october'] + +element['tn'];
            }

          }

        }
      }
      console.log(recoveredData);
      //recovered graph
      new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: ["October", "November", "December"],
          datasets: [
            {
              label: "Recovered count",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
              data: [recoveredData['october'], recoveredData['november'], recoveredData['december']]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Recovered Count-Tamil Nadu'
          }
        }
      });

    })
  }

}
