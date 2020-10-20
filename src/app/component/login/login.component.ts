import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {GamesGuard} from '../../services/games-guard.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private return = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private loginService: LoginService, private guardService: GamesGuard) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => this.return = params['return']);
  }

  login(loginForm: NgForm): void {
    this.loginService.authenticate(loginForm.value).subscribe(() => {
      this.router.navigateByUrl(this.return);
    });
  }
}
