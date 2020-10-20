import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../../services/category.service';
import {GamesGuard} from '../../services/games-guard.service';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  title = "Games";
}
