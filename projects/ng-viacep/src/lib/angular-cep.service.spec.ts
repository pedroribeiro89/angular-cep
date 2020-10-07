import { TestBed } from '@angular/core/testing';

import { AngularCepService } from './angular-cep.service';

describe('AngularCepService', () => {
  let service: AngularCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
