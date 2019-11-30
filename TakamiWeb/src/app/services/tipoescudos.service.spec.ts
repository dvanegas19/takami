import { TestBed } from '@angular/core/testing';

import { TipoescudosService } from './tipoescudos.service';

describe('TipoescudosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoescudosService = TestBed.get(TipoescudosService);
    expect(service).toBeTruthy();
  });
});
