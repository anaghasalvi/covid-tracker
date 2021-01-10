import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideTabComponent } from './side-tab/side-tab.component';
import { TestingReportComponent } from './testing-report/testing-report.component';
import { SamplePopupComponent } from './sample-popup/sample-popup.component';
import {CovidTrackingService } from './covid-tracking.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideTabComponent,
    TestingReportComponent,
    SamplePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [CovidTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
