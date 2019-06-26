import { TestBed } from '@angular/core/testing';

import { ActionEventService } from './action-event.service';

describe('ActionEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionEventService = TestBed.get(ActionEventService);
    expect(service).toBeTruthy();
  });
});
