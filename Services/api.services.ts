import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: 'root'
    }
)


export class ApiServices {

    constructor(private http: HttpClient) { }

    public addname(data: any) {
        return this.http.post<any>('http://localhost:3000/addUser', data)

    }

}