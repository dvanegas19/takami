import { TestBed } from '@angular/core/testing';

import { DeflectoresService } from './deflectores.service';

describe('DeflectoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeflectoresService = TestBed.get(DeflectoresService);
    expect(service).toBeTruthy();
  });
});
