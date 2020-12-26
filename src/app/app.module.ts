import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';

// Components
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { PaneOneComponent } from './pane-one/pane-one.component';
import { PaneTwoComponent } from './pane-two/pane-two.component';
import { PaneThreeComponent } from './pane-three/pane-three.component';
// Services
import { PaneServicesService } from "../app/services/pane-services.service";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PaneOneComponent,
    PaneTwoComponent,
    PaneThreeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule
  ],
  providers: [PaneServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
