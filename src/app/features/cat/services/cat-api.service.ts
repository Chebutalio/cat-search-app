import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Breed, Cat } from "../../../interfaces/cat.model";

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private apiKey: string = 'live_lpUtBICdLo1qGGFeYvqYyVLc2nrX6FG8i5h7RFIRYiYRszcPwlgQg3dmwKpphAPH';
  private apiUrl: string = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) { }

  public getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.apiUrl}/breeds`, {
      headers: { 'x-api-key': this.apiKey }
    });
  }

  public getImages(breedId: string, limit: number): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}/images/search`, {
      headers: { 'x-api-key': this.apiKey },
      params: { breed_id: breedId, limit: limit.toString() }
    });
  }
}
