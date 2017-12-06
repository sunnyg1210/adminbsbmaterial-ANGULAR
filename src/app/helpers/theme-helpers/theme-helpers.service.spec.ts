import { TestBed, inject } from '@angular/core/testing';

import { ThemeHelpersService } from './theme-helpers.service';

describe('ThemeHelpersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeHelpersService]
    });
  });

  it('should be created', inject([ThemeHelpersService], (service: ThemeHelpersService) => {
    expect(service).toBeTruthy();
  }));
});
