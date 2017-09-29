import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdToolbarModule, MdListModule, MdIconModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { ChartLyricsService } from '../services/chart-lyrics.service';
import { HttpModule } from '@angular/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule,
        MdButtonModule, MdInputModule, MdToolbarModule, MdIconModule,MdListModule ],
      declarations: [ DashboardComponent ],
      providers: [ ChartLyricsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
