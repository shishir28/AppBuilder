//shishir: need to evaluate if bases interface is nice to have
export class Project  {
    public id: number;
    public userName: string;
    public name: string;
    public title: string;
    public description: string;
    public rootNamespace: string;
    public companyName: string;
    public createdDateUtc: Date;
    public lastModifiedDateUtc: Date;
    public lastModifiedBy: number; 
    public allowDownload: boolean;
    public allowPublish: boolean;
}