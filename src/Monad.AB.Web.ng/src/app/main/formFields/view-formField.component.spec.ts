import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormFieldComponent } from './view-formField.component';

describe('ViewFormFieldComponent', () => {
    let component: ViewFormFieldComponent;
    let fixture: ComponentFixture<ViewFormFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewFormFieldComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewFormFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
