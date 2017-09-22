import { Component } from '@angular/core';
import { ModalService } from './dashboard/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChartLyrics Song/Lyrics Lookup';
  modalId = 'hoplaModal';
  
    constructor(
      public modalService: ModalService
    ) {}
}
