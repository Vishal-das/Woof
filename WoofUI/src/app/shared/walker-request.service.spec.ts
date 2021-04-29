import { TestBed } from '@angular/core/testing';

import { WalkerRequestService } from './walker-request.service';

describe('WalkerRequestService', () => {
  let service: WalkerRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalkerRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
