import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PaneServicesService {
  second: number = 0;
  minute: number = 0;

  subjectSecond = new BehaviorSubject<number>(0);
  subjectMinute = new BehaviorSubject<number>(0);
  subjectA = new BehaviorSubject(123);



  constructor() { }








  // incrementSecond() {
  //   setInterval(() => {
  //     this.second += 1
  //     if (this.second === 60) {
  //       this.minute += 1;
  //       this.second = 0;
  //     }
  //     console.log(`${this.minute}: ${this.second}`)
  //   }, 1000)
  // }

}








