import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormFieldComponent } from './list-formField.component';

describe('ListFormFieldComponent', () => {
    let component: ListFormFieldComponent;
    let fixture: ComponentFixture<ListFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ ListFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(ListFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
