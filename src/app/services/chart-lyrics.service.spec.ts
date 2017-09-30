import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, RequestMethod, ResponseOptions, ConnectionBackend } from '@angular/http';
import { ChartLyricsService } from './chart-lyrics.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

describe('ChartLyricsService', () => {
  let backend: MockBackend;  
  let service: ChartLyricsService; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChartLyricsService, 
        HttpModule,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]        
        }],
    });

    backend = TestBed.get(MockBackend);
    service = TestBed.get(ChartLyricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable when get called', () => {
    var initialResponse = service.getLyrics(1234, "987654");
    expect(initialResponse).toEqual(jasmine.any(Observable));
  });

  it('should resolve to list of names when get called', () => {

    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({ body: `<GetLyricResult>
      <TrackChecksum>string</TrackChecksum>
      <TrackId>int</TrackId>
      <LyricChecksum>string</LyricChecksum>
      <LyricId>int</LyricId>
      <LyricSong>string</LyricSong>
      <LyricArtist>string</LyricArtist>
      <LyricUrl>string</LyricUrl>
      <LyricCovertArtUrl>string</LyricCovertArtUrl>
      <LyricRank>int</LyricRank>
      <LyricCorrectUrl>string</LyricCorrectUrl>
      <Lyric>string</Lyric>
  </GetLyricResult>` })));    
    });

    var initialResponse = service.getLyrics(1234, "987654");
    let names: any;
    initialResponse.subscribe((data: any) => names = data);
    expect(names).toEqual(['Dijkstra', 'Hopper']);    
  });

});
