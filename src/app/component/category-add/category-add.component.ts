import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Navigation, Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';
import {Category} from '../model/category';
import {CategoryService} from '../../services/category.service';
import {AutoUnsubscribe} from '../../decorator/AutoUnSubscribe';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NameValidator} from '../validators/NameValidator';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
@AutoUnsubscribe
export class CategoryAddComponent implements OnInit {
  showDetails = false;
  category_id: any;

  categoryForm: FormGroup;
  formTemplate: any = [
    {label: 'category_name', type: 'textBox', value: 'Category Name'}
  ];


  constructor(private formBuilder: FormBuilder, private router: Router
    ,         private sharedService: SharedService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', NameValidator(new RegExp('test'))]
    });

    this.formTemplate.forEach(data => {
      this.categoryForm.addControl(data.label, new FormControl(data.value));
    });
  }


  save(): void {
    if (this.categoryForm.valid) {
      console.log("trying to save");
      console.log(this.categoryForm);
      this.categoryService.save(this.categoryForm.value).subscribe((response: Category) => {
        console.log('Category created with id:' + response.id);
        this.category_id = response.id;
        this.showDetails = true;
      }, error => {
        console.error(error);
      });
    }
  }

  deleteCategory(id: any): void {
    console.log('delete Category with id: ' + id);
    this.categoryService.delete(id).subscribe(value => {
      this.router.navigate(['']);
    });
  }

}
