import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormFieldViewComponent} from './edit-formFieldView.component';

describe('EditformFieldViewComponent', () => {
    let component: EditFormFieldViewComponent;
    let fixture: ComponentFixture<EditFormFieldViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [EditFormFieldViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(EditFormFieldViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
