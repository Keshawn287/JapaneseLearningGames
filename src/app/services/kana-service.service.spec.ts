import { TestBed } from '@angular/core/testing';

import { KanaServiceService } from './kana-service.service';

describe('KanaServiceService', () => {
  let service: KanaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
