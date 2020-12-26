import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaneServicesService } from "../services/pane-services.service";



@Component({
  selector: 'app-pane-two',
  templateUrl: './pane-two.component.html',
  styleUrls: ['./pane-two.component.css'],
  providers: [PaneServicesService]
})
export class PaneTwoComponent implements OnInit {

  // variables
  typeInputForm: FormGroup;

  // Sending Timer Boolean to Parent:
  isTimerChild = false;
  @Output() isTimerChildOut = new EventEmitter<boolean>();

  // Getting Text Length from Parent
  @Input() sampleTextLength: number;
  inputFieldLength: number;
  isTextTypeDone: boolean = false;



  constructor(
    private formBuilder: FormBuilder,
    public paneServices: PaneServicesService
  ) { }

  ngOnInit() {
    this.typeInputForm = this.formBuilder.group({
      typeInputField: ''
    })
    this.typeInputForm.valueChanges.subscribe(() => {
      let text = this.typeInputForm.value.typeInputField
      this.inputFieldLength = text.length
    })
    this.intervalCheck
  }

  startTimer() {
    console.log("Timer Started")
  }

  textLengthCheck() {
    // if typed length = sample text length, then stop timer
    if (this.inputFieldLength >= this.sampleTextLength) {
      this.isTextTypeDone = true
    }

  }
  timerFlip() {
    if (!this.isTimerChild && !this.isTextTypeDone) {
      this.isTimerChild = true
      this.isTimerChildOut.emit(this.isTimerChild);
    }
  }

  public intervalCheck = setInterval(() => {
    this.textLengthCheck()
    if (this.isTextTypeDone) {
      console.log("Stop Timer")
      clearInterval(this.intervalCheck)
      this.isTimerChild = false
      this.isTimerChildOut.emit(this.isTimerChild);
    }
  }, 250)

}
