import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PaneServicesService } from "../services/pane-services.service";


@Component({
  selector: 'app-pane-three',
  templateUrl: './pane-three.component.html',
  styleUrls: ['./pane-three.component.css'],
  providers: [PaneServicesService],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PaneThreeComponent implements OnInit {
  // Timer Variables
  @Input() isTimer: boolean;
  paneThreeSecond: number = 0
  paneThreeMinute: number = 0
  timeInSeconds: number;
  wpm: number;
  infinity: number = Infinity

  // Text Length Calculation Variables
  exampleText: string = "Proin egestas arcu eget rhoncus efficitur. Praesent faucibus, eros sed molestie ornare, nunc risus varius metus, sed scelerisque orci purus eu nulla. Sed id porta justo."

  // Send length to Pane2
  exampleTextCharNums: number;
  @Output() textToParent = new EventEmitter<number>();

  constructor(public paneServices: PaneServicesService,
    private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.startTime()
    this.calculateExample(this.exampleText)
    this.cd.detectChanges
  }

  // Setup Interval to start counting if the timer is activated in Pane2
  startTime() {
    setInterval(() => {
      if (this.isTimer) {
        this.paneThreeSecond += 1
        if (this.paneThreeSecond === 60) {
          this.paneThreeMinute += 1;
          this.paneThreeSecond = 0;
        }
      }
      this.calculateWPM()
    }, 1000)
  }
  // Calculate the # of chars in example text
  calculateExample(text: string) {
    this.exampleTextCharNums = text.length
    // Work on sending the length out of the component
    this.textToParent.emit(this.exampleTextCharNums)
  }
  calculateTimeinSeconds() {
    this.timeInSeconds = (this.paneThreeMinute * 60) + this.paneThreeSecond
  }
  calculateWPM() {
    this.calculateTimeinSeconds()
    this.wpm = (this.exampleTextCharNums / 5) / (this.timeInSeconds / 60)
    this.wpm = Math.round(this.wpm)
  }
}
