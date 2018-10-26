import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { UserClaimsViewModel, UpdateUserClaimsViewModel } from './account';



@Injectable()

export class AccountsService {
    constructor(private http: Http, private location: Location) {
    }

    login(loginUser) {
        return this.http.post("/api/account/login", JSON.stringify(loginUser))
            .pipe(map(res => res.json()));
    }

    register(registerUser) {
        return this.http.post("/api/account/register", JSON.stringify(registerUser))
            .pipe(map(res => res.json()));
    }

    logout(logoutUser) {
        return this.http.post("/api/account/LogOff", JSON.stringify(logoutUser))
            .pipe(map(res => res.json()));
    }

    getAllUsers() {
        return this.http.get("/api/account/GetAllUsers")
            .pipe(map(res => res.json()));
    }

    addUser(userData) {
        return this.http.post("/api/account/addUser", JSON.stringify(userData))
            .pipe(map(res => res.json()));
    }

    GetUser(userId) {
        return this.http.get("/api/account/GetUser?userId=" + userId)
            .pipe(map(res => res.json()));
    }

    editUser(userData) {
        return this.http.put("/api/account/editUser", JSON.stringify(userData))
            .pipe(map(res => res.json()));
    }


    getUserClaims(userId): Observable<any[]> {
        return this.http.get('/api/account/GetUserClaims?userId=' + userId)
            .pipe(map(res => res.json()));
    }


    saveUserClains(userId, userClaims: UserClaimsViewModel[]) {
        let data = new UpdateUserClaimsViewModel();
        data.userId = userId;
        data.claims = userClaims;
        return this.http.put('/api/account/UpdateUserClaims', JSON.stringify(data))
            .pipe(map(res => res.json()));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}