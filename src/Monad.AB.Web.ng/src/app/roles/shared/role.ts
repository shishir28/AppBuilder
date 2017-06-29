export class AddRoleViewModel {
    name: string;
    normalizedName: string;
    description: string;
    isActive: boolean;
}

export class RoleViewModel extends AddRoleViewModel {
    roleId: string;
}

export class UserRoleViewModel extends RoleViewModel {
    isSelected: boolean;
}

export class RoleRightsViewModel {
    id: string;
    name: string;
    description: string;
    resourceTypeId: number;
    isAllowed: boolean;
    isCreate: boolean;
    isEdit: boolean;
    isView: boolean;
    isList: boolean;
    isDelete: boolean;
    createdDateUtc: Date;
    lastModifiedDateUtc: Date;
    lastModifiedBy: number;
}
//export interface UpdateRoleRightsView {
//    RoleRights: List<RoleRightsDto>;
//    ApplicationRoleId: string;
//}
