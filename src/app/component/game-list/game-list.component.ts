import {Component, OnInit} from '@angular/core';

import {AutoUnsubscribe} from '../../decorator/AutoUnSubscribe';
import {SharedService} from '../../services/shared.service';
import {Subscription} from 'rxjs';
import {Game} from '../model/game';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
@AutoUnsubscribe
export class GameListComponent implements OnInit {

  games: Game[] = [];
  private sharedServiceSub: Subscription;
  displayedColumns: string[] = ['id', 'game_name', 'category_id', 'author', 'play_duration', 'price', 'image', 'actions'];

  constructor(private gameService: GameService, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    console.log('game list init called');
    this.getGames();
    this.sharedServiceSub = this.sharedService.messageSubject.subscribe(value => console.log('GamesList ' + value));
  }

  private getGames(): void {
    this.gameService.getAll()
      .then((games: Game[]) => this.games = games);
    console.log(this.games);
  }

  delete(id: number): void {
    this.gameService.delete(id).subscribe(value => {
      this.getGames();
    });
  }

}
