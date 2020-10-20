import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CategoryService} from '../services/category.service';
import {Category} from '../component/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailResolverService implements Resolve<Category> {

  constructor(private categoryService: CategoryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> {
    return this.categoryService.findById(route.params.id);
  }
}
