import { HttpModule } from '@angular/http';
import { ChartLyricsService } from './services/chart-lyrics.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdToolbarModule, MdListModule, MdIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MdButtonModule, MdInputModule, MdToolbarModule, MdListModule, MdIconModule,
    AppRoutingModule,
  ],
  providers: [ChartLyricsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

