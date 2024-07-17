import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userType } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='http://localhost:3000'
  
  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<userType[]> {
    return this.http.get<userType[]>(`${this.baseUrl}/userDetails`);
  }
  addUser(user:userType):Observable<userType>{
    return this.http.post<userType>(`${this.baseUrl}/userDetails`,user);
  }
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/userDetails/${id}`);
  }
  updateUser(id: string | undefined, user: userType): Observable<any> {
    return this.http.put<userType>(`${this.baseUrl}/userDetails/${id}`,user);
  }
  getAllIndianStatesAndCities(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/indianStates`)
  }
}
