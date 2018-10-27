import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[msElementAccess]'
})
export class ElementAccessDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set msElementAccess(accessRight: string) {
        var acessControlList = JSON.parse(sessionStorage.getItem('accessRights'));
        var foundAccessRight = acessControlList.filter(
            ac => ac.claimValue == accessRight);
        if (foundAccessRight.length > 0) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear // Remove lement from Dom 
        }
    }
}
