import { TestBed } from '@angular/core/testing';

import { ServicotesteService } from './servicoteste.service';

describe('ServicotesteService', () => {
  let service: ServicotesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicotesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
