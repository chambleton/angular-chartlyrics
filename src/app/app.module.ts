import { HttpModule } from '@angular/http';
import { ChartLyricsService } from './services/chart-lyrics.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule} from '@angular/material';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalModule } from './dashboard/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule,
    HttpModule,
    ModalModule,
    AppRoutingModule,
  ],
  providers: [ChartLyricsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

