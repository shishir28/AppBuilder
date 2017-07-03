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
    City: string;    
    state: string;        
    userText: string;
   // roles: List<UserRoleViewModel>;
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