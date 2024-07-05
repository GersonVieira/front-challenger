import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { provideHttpClient } from '@angular/common/http';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
