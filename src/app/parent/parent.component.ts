import { Component, OnInit } from '@angular/core';
import { PaneServicesService } from "../services/pane-services.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [PaneServicesService]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  // Timer from Pane 2
  isTimerParent: boolean = false;
  timerFlipParent(incomingBool: boolean) {
    this.isTimerParent = incomingBool
  }

  // Text Length from Pane 3
  textLengthParent: string;
  textfromChild(numberFromChild) {
    this.textLengthParent = numberFromChild
  }


}
