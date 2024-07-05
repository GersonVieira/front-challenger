import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private apiURL = 'https://api.thedogapi.com/v1';

  constructor(private httpClient: HttpClient) { }

  getHeaders() {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    headers.append('x-api-key', 'live_ABDu4m3lDiDfJYuYAT44cbxxl1dOjj6ysJPTWkvAuMN18vbAu5xUt7tx5eq2Nqkd');

    return headers;
  }

  getDogs(pageIndex: number, pageSize: number) {
    return this.httpClient.get(`${this.apiURL}/breeds?limit=${pageSize}&page=${pageIndex}&has_breeds=0&order=ASC`, { headers: this.getHeaders(), observe: 'response', responseType: 'json', transferCache: false });
  }

  getImage(imageId: string) {
    return this.httpClient.get(`${this.apiURL}/images/${imageId}`, { headers: this.getHeaders() });
  }
}
