import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KanaInterface } from '../interfaces/kana-interface';

@Injectable({
  providedIn: 'root'
})
export class KanaServiceService {
  private kanaUrl = 'assets/hiragana-katakana.json';

  constructor(private http: HttpClient) { }

  getKanaData(): Observable<KanaInterface[]>{
    return this.http.get<KanaInterface[]>(this.kanaUrl)
  }
}
