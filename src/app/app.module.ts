import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterRoutingModule} from './router/router-routing.module';
import { HomeComponent } from './component/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryListComponent } from './component/category-list/category-list.component';
import {CategoryService} from './services/category.service';
import { LoginComponent } from './component/login/login.component';
import { CategoryDetailComponent } from './component/category-detail/category-detail.component';
import { AdminComponent } from './component/admin/admin.component';
import { CategoryAddComponent } from './component/category-add/category-add.component';
import { CategoryHomeComponent } from './component/category-home/category-home.component';
import { GameListComponent } from './component/game-list/game-list.component';
import { GameAddComponent } from './component/game-add/game-add.component';
import { GameHomeComponent } from './component/game-home/game-home.component';
import {HttpInterceptor} from './interceptor/HttpInterceptor';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { MainPageComponent } from './component/main-page/main-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryListComponent,
    LoginComponent,
    CategoryDetailComponent,
    AdminComponent,
    CategoryAddComponent,
    CategoryHomeComponent,
    GameListComponent,
    GameAddComponent,
    GameHomeComponent,
    NavBarComponent,
    MainPageComponent],
  imports: [
    HttpClientModule,
    RouterRoutingModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true}],
  bootstrap: [HomeComponent]
})
export class AppModule { }

/*

lesson notes : use ngModel to get a reactive form
 */
