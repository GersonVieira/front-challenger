import { TestBed } from '@angular/core/testing';

import { DogService } from './dog.service';
import { provideHttpClient } from '@angular/common/http';

describe('DogService', () => {
  let service: DogService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
    service = TestBed.inject(DogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
