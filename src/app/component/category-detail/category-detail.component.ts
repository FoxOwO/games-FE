import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {Category} from '../model/category';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})

export class CategoryDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private sharedService: SharedService, private categoryService: CategoryService) {
  }

  private static subscription: Subscription;
  category: Category;
  @Input() id: string;
  @Output() deleteEvent = new EventEmitter();
  isDetail = false;

  ngOnInit(): void {
    this.isDetail = this.route.snapshot.url.find(value => value).path !== 'category';
   // this.isDetail = this.route.snapshot.url[1].path !== 'category';
    if (CategoryDetailComponent.subscription === undefined) {
      CategoryDetailComponent.subscription = this.sharedService.messageObserver
        .subscribe(value => console.log('CategoryDetailComponent ' + value));
    }
    if (this.id !== undefined) {
      this.categoryService.findById(this.id).subscribe(category => this.category = category);
    } else {
      this.category = this.route.snapshot.data.category;
    }
  }

  delete(id): void {
    //todo did doet nog niets -> komt niet tot in service
    console.log("trying to delete from detail");
    this.deleteEvent.emit(id);
  }
}
