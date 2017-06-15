import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewformFieldViewComponent } from './view-formFieldView.component';

describe('ViewFormFieldViewComponent', () => {
    let component: ViewformFieldViewComponent;
    let fixture: ComponentFixture<ViewFormFieldViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewFormFieldViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewFormFieldViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
