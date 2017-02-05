import { TestBed, async, inject } from '@angular/core/testing';
import { GetpoemsService } from './getpoems.service';

describe('Service: Getpoems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetpoemsService]
    });
  });

  it('should ...', inject([GetpoemsService], (service: GetpoemsService) => {
    expect(service).toBeTruthy();
  }));
});