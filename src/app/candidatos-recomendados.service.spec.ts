import { TestBed, inject } from '@angular/core/testing';

import { CandidatosRecomendadosService } from './candidatos-recomendados.service';

describe('CandidatosRecomendadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatosRecomendadosService]
    });
  });

  it('should be created', inject([CandidatosRecomendadosService], (service: CandidatosRecomendadosService) => {
    expect(service).toBeTruthy();
  }));
});
