import { TestBed, inject } from '@angular/core/testing';

import { LoadConfigService } from './load-config.service';

describe('LoadConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadConfigService]
    });
  });

  it('should ...', inject([LoadConfigService], (service: LoadConfigService) => {
    expect(service).toBeTruthy();
  }));
});
