import { TestBed, inject } from '@angular/core/testing';

import { FormFieldViewsService } from './formFieldViews.service';

describe('FormFieldViewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [FormFieldViewsService]
    });
  });

  it('should ...', inject([FormFieldViewsService], (service: FormFieldViewsService) => {
    expect(service).toBeTruthy();
  }));
});
