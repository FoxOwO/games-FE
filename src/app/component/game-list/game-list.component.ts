import {Component, OnInit} from '@angular/core';

import {AutoUnsubscribe} from '../../decorator/AutoUnSubscribe';
import {SharedService} from '../../services/shared.service';
import {Subscription} from 'rxjs';
import {Game} from '../model/game';
import {GameService} from '../../services/game.service';

import {Category} from '../model/category';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
@AutoUnsubscribe
export class GameListComponent implements OnInit {

  games: Game[] = [];
  categories: Category[] = [];
  private sharedServiceSub: Subscription;
  displayedColumns: string[] = ['id', 'game_name', 'category_id', 'author', 'play_duration', 'price', 'image', 'actions'];

  constructor(private gameService: GameService, private categoryService: CategoryService, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    console.log('game list init called');
    //find a way to not make this call.
    this.getCategories();
    this.getGames();
    this.sharedServiceSub = this.sharedService.messageSubject.subscribe((response: any) => {
      console.log('this is where the magic happens');
      console.log(response);
    });
  }

  private getGames(): void {
    this.gameService.getAll()
      .then((games: Game[]) => {
        this.games = games;
        this.games.forEach(g => {
          this.categories.forEach(c => {
            if (g.category_id === c.id) {
              console.log(g);
              console.log(c);
              g.category_id = c.category_name;
            }
          });
        });
      });
  }

  delete(id: number): void {
    this.gameService.delete(id).subscribe(value => {
      this.getGames();
    });
  }

  private getCategories(): void {
    this.categoryService.getAll()
      .then((categories: Category[]) => {
        this.categories = categories;
      });
  }
}
