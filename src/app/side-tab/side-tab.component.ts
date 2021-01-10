import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-tab',
  templateUrl: './side-tab.component.html',
  styleUrls: ['./side-tab.component.scss']
})
export class SideTabComponent implements OnInit {
  public popupFlag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  showPopup(){
    this.popupFlag= !this.popupFlag;
  }
  onClose(flag: boolean) {
    this.popupFlag = flag;
  }

}
