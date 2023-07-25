import { TestBed } from '@angular/core/testing';

import { MessageHandlingService } from './message-handling.service';

describe('MessageHandlingService', () => {
  let service: MessageHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
