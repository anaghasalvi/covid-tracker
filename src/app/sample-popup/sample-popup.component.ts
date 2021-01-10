import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-popup',
  templateUrl: './sample-popup.component.html',
  styleUrls: ['./sample-popup.component.scss']
})
export class SamplePopupComponent implements OnInit {
  @Output() closePopup = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closePopup.emit(false);
  }

}
