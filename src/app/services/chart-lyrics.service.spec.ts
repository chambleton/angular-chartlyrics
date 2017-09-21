import { TestBed, inject } from '@angular/core/testing';

import { ChartLyricsService } from './chart-lyrics.service';

describe('ChartLyricsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartLyricsService]
    });
  });

  it('should be created', inject([ChartLyricsService], (service: ChartLyricsService) => {
    expect(service).toBeTruthy();
  }));
});
