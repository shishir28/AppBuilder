import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'

import { UserClaimsViewModel, UpdateUserClaimsViewModel } from './account';



@Injectable()

export class AccountsService {
    constructor(private http: Http) {
    }

    login(loginUser) {
        return this.http.post("/api/account/login", JSON.stringify(loginUser))
            .map(res => res.json());
    }

    register(registerUser) {
        return this.http.post("/api/account/register", JSON.stringify(registerUser))
            .map(res => res.json());
    }

    logout(logoutUser) {
        return this.http.post("/api/account/LogOff", JSON.stringify(logoutUser))
            .map(res => res.json());
    }

    getAllUsers() {
        return this.http.get("/api/account/GetAllUsers")
            .map(res => res.json());
    }

    addUser(userData) {
        return this.http.post("/api/account/addUser", JSON.stringify(userData))
            .map(res => res.json());
    }

    GetUser(userId) {
        return this.http.get("/api/account/GetUser?userId=" + userId)
            .map(res => res.json());
    }

    editUser(userData) {    
        return this.http.put("/api/account/editUser", JSON.stringify(userData))
            .map(res => res.json());
    }


    getUserClaims(userId): Observable<any[]> {
        return this.http.get('/api/account/GetUserClaims?userId=' + userId)
            .map(res => res.json());
    }


    saveUserClains(userId, userClaims: UserClaimsViewModel[]) {
        let data = new UpdateUserClaimsViewModel();
        data.userId = userId;
        data.claims = userClaims;
        return this.http.put('/api/account/UpdateUserClaims', JSON.stringify(data))
            .map(res => res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}