import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userType } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='http://localhost:3000/userDetails'
  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<userType[]> {
    return this.http.get<userType[]>(this.baseUrl);
  }
  addUser(user:userType):Observable<userType>{
    return this.http.post<userType>(this.baseUrl,user);
  }
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  updateUser(id: string | undefined, user: userType): Observable<any> {
    console.log(id,user);
    
    return this.http.put<userType>(`${this.baseUrl}/${id}`,user);
  }
}
