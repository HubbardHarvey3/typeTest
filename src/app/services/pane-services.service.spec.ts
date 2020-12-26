import { TestBed } from '@angular/core/testing';

import { PaneServicesService } from './pane-services.service';

describe('PaneServicesService', () => {
  let service: PaneServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaneServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
