import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
