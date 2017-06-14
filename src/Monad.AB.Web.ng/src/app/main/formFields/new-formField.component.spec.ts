import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormFieldComponent } from './new-formField.component';

describe('NewFormFieldComponent', () => {
    let component: NewFormFieldComponent;
    let fixture: ComponentFixture<NewFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ NewFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(NewFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
