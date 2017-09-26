import { ChartLyricsService, GetLyricResult, SearchLyricResult } from '../services/chart-lyrics.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  showLyrics: boolean = false;
  selectedSongListItem: SearchLyricResult;
  selectedSong: GetLyricResult = new GetLyricResult();
  savedSongs: SearchLyricResult[] = [];
  songs: SearchLyricResult[] = [];
  searchText: string;
  errorMessage: string;

  constructor(private ChartLyricsService: ChartLyricsService) { }
  ngOnInit() {
  }

  searchLyrics(): boolean {
    this.clearSearch();
    
    if(this.searchText.length > 0) {
      this.ChartLyricsService.getSongsByLyricText(this.searchText)
                     .subscribe(
                       songs => this.songs = songs,
                       error =>  this.errorMessage = <any>error);
    }
          
    this.searchText = '';
    return false;
  }

  addSong(song: SearchLyricResult) {
    this.savedSongs.push(song);
  }
  
  removeSong(song: SearchLyricResult) {
    var index = this.savedSongs.indexOf(song);
    if (index > -1) {
      this.savedSongs.splice(index, 1);
    }    
  }
  
  addSelectedSong() {
    this.savedSongs.push(this.selectedSongListItem);
  }

  clearSearch() {
    this.songs = [];
    this.errorMessage = undefined;
    this.showLyrics = false;
  }

  getLyrics(song: SearchLyricResult) {
    this.selectedSongListItem = song;
    this.showLyrics = true;
    this.ChartLyricsService.getLyrics(song.LyricId, song.LyricChecksum)
                .subscribe(
                  lyrics => this.selectedSong = lyrics,
                  error =>  this.errorMessage = <any>error);    
  }

}
