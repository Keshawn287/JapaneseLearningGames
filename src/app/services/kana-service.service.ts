import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KanaServiceService {
  private kanaUrl = 'assets/hiragana-katakana.json';

  constructor(private http: HttpClient) { }

  getKanaData() : Observable<any> {
    return this.http.get<any>(this.kanaUrl);
  }
}
