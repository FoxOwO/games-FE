import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Game} from '../component/model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  constructor(private http: HttpClient) {
  }

  getAll(): Promise<Game[]> {
    return this.http.get<Game[]>('/game').toPromise();
  }

  delete(id: number): Observable<any> {
    return this.http.delete('/game/' + id);
  }
  findById(id: any): Observable<Game> {
    return this.http.get<Game>('/game/' + id);
  }

  save(game: Game): Observable<any> {
    return this.http.post('/game', game);
  }
}
