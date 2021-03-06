﻿export class FormViewTypeModel {
    public id: number;
    public name: string;
    public description: string;
}
export class FormFieldView {
    public id: number;
    public formFieldId: number;
    public viewID: number;
    public fieldID: number;
    public row: number;
    public rowSpan: number;
    public column: number;
    public columnSpan: number;
    public readOnly: boolean;
    public hidden: boolean;
    public createdDateUtc: Date;
    public lastModifiedDateUtc: Date;
    public lastModifiedBy: number;
    public view: FormViewTypeModel;
}
export class FormField {
    public id: number;
    public formID: number;
    public fieldTypeID: number;
    public name: string;
    public label: string;
    public description: string;
    public width: number;
    public rowNumber: number;
    public rowSpan: number;
    public columnNumber: number;
    public columnSpan: number;
    public groupControlID: number;
    public groupName: string;
    public isRequired: boolean;
    public isIdentifier: boolean;
    public isForeignKey: boolean;
    public foreignFieldID: number;
    public createdDateUtc: Date;
    public lastModifiedDateUtc: Date;
    public lastModifiedBy: number;
}
export class EditFormFields extends FormField {

}
export class DeleteFormFields extends FormField {

}
export class EditFormFieldsView extends FormField {
    public readOnly: boolean;
    public hidden: boolean;
    public viewName: number;
    public row: number;
    public column: number;
    public viewID: number;
    public fieldID: number;
    public formFieldViewID: number;
}

export class FieldType {
    public Id: number;
    public Name: string;
    public Description: string;
}