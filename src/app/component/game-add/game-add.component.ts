import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Navigation, Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';
import {AutoUnsubscribe} from '../../decorator/AutoUnSubscribe';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NameValidator} from '../validators/NameValidator';
import {GameService} from '../../services/game.service';
import {Game} from '../model/game';


@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
@AutoUnsubscribe
export class GameAddComponent implements OnInit {

  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  files = [];

  showDetails = false;
  id;

  private imageFile: any;

  gameForm: FormGroup;
  formTemplate: any = [
    {label: 'category_id', type: 'number', value: ''},
    {label: 'difficulty_id', type: 'number', value: ''},
    {label: 'game_name', type: 'textBox', value: ''},
    {label: 'editor', type: 'textBox', value: ''},
    {label: 'author', type: 'textBox', value: ''},
    {label: 'year_edition', type: 'number', value: ''},
    {label: 'age', type: 'textBox', value: ''},
    {label: 'min_players', type: 'number', value: ''},
    {label: 'max_players', type: 'number', value: ''},
    {label: 'play_duration', type: 'textBox', value: ''},
    {label: 'price', type: 'number', value: ''},
    {label: 'image', type: 'textBox', value: ''}
  ];


  constructor(private formBuilder: FormBuilder, private router: Router
    ,         private sharedService: SharedService, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      name: ['', NameValidator(new RegExp('test'))]
    });

    this.formTemplate.forEach(data => {
      this.gameForm.addControl(data.label, new FormControl(data.value));
    });
  }


  save(): void {
    if (this.gameForm.valid) {
      console.log("trying to save");
      console.log(this.gameForm);
      this.gameService.save(this.gameForm.value).subscribe((response: Game) => {
        console.log('Game created with id:' + response.id);
        this.id = response.id;
        this.showDetails = true;
      }, error => {
        console.error(error);
      });
    }
  }

  deleteGame(id: any): void {
    console.log('delete Category with id: ' + id);
    this.gameService.delete(id).subscribe(value => {
      this.router.navigate(['']);
    });
  }

  onClick(): void {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      this.imageFile = fileUpload.files[0];
    };
    fileUpload.click();
  }

}
