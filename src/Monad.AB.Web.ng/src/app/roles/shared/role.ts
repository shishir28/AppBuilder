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
    Id: number;
    resourceName: string;
    isAdd: boolean;
    isedit: boolean;
    isDelete: boolean;
    isView: boolean;
    isList: boolean;
    addId: number;
    editId: number;
    deleteId: number;
    viewId: number;
    listId: number;
}


export class UpdateRoleRightsViewModel {
    roleRights: RoleRightsViewModel[];
    applicationRoleId: string;
}
