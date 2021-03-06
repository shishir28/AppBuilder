export class LoginDetail{
    public userName: string;
    public password: string;
    public rememberMe: boolean;
}

export class RegisterDetail {
    public email: string;
    public password: string;
    public confirmPassword: string;
}

export class LogoutDetail {
    public UserName: string;
}

export class ManagerViewModel {
    userName: string;
    securityUserId: string;
    email: string;
    userId: number;
    firstName: string;
    lastName: string;
    fullName: string;    
}

export class CommonUserViewModel {   
    userName: string;    
    firstName: string;    
    lastName: string;    
    email: string;    
    phoneNumber: string;    
    addressLine1: string;    
    addressLine2: string;    
    zip: string;    
    city: string;    
    state: string;        
    userText: string;
    roleId: string;
    createdDateUtc: Date;
    lastModifiedDateUtc: Date;
    lastModifiedBy: number;
    isEnabled: boolean;
    printName: string;
    gender: string;
}


export class UserViewModel extends CommonUserViewModel {
    userId: number;
    id: string;
    fullName: string;
}

export class AddUserViewModel extends CommonUserViewModel {

}
export class AddUserResultViewmodel {
    statusCode: number;
    emailConfirmationToken: string;
    securityUserId: string;
}
export class UserEditViewModel extends UserViewModel {

}


export class UserClaimsViewModel {
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

export class UpdateUserClaimsViewModel {
    claims: UserClaimsViewModel[];
    userId: string;
}