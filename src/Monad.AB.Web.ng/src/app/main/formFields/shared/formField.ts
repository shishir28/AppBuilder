//shishir: need to evaluate if bases interface is nice to have
export class Form {
    public id: number;
    public projectID: number;
    public formName: string;
    public formTitle: string;
    public formDescription: string;
    public dependencyID: number;
    public createdDateUtc: Date;
    public lastModifiedDateUtc: Date;
    public lastModifiedBy: number;
}