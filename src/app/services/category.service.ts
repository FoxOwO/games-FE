import {Injectable} from '@angular/core';
import {Category} from '../component/model/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http: HttpClient) {

  }

  getAll(): Promise<Category[]> {
    return this.http.get<Category[]>('/category').toPromise();
  }

  delete(id: number): Observable<any> {
    return this.http.delete('/category/' + id);
  }
  findById(id: any): Observable<Category> {
    return this.http.get<Category>('/category/' + id);
  }

  save(category: Category): Observable<any> {
    return this.http.post('/category', category);
  }
}
