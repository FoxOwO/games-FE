import { Component, OnInit } from '@angular/core';

import {Category} from '../model/category';
import {CategoryService} from '../../services/category.service';
import {AutoUnsubscribe} from '../../decorator/AutoUnSubscribe';
import {SharedService} from '../../services/shared.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
@AutoUnsubscribe
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  private sharedServiceSub: Subscription;
  displayedColumns: string[] = [ 'id', 'categoryname', 'actions'];

  constructor(private categoryService: CategoryService, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.sharedServiceSub = this.sharedService.messageSubject.subscribe(value => console.log('CategoryList ' + value));
  }

  private getCategories(): void {
    this.categoryService.getAll()
      .then((categories: Category[]) => this.categories = categories);
  }

    delete(id: number): void {
      this.categoryService.delete(id).subscribe(value => {
        this.getCategories();
      });
    }

}
