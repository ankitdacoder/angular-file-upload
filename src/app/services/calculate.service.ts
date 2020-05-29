import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}


  public calculatePlate()
  {
    return this.http.get(this.baseUrl + "/calculate"); 
  }


}
