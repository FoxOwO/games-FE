import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryListComponent} from '../component/category-list/category-list.component';
import {LoginComponent} from '../component/login/login.component';
import {AdminComponent} from '../component/admin/admin.component';
import {GamesGuard} from '../services/games-guard.service';
import {CategoryDetailComponent} from '../component/category-detail/category-detail.component';
import {CategoryDetailResolverService} from '../resolver/category-detail-resolver.service';
import {CategoryAddComponent} from '../component/category-add/category-add.component';
import {GameListComponent} from '../component/game-list/game-list.component';
import {CategoryHomeComponent} from '../component/category-home/category-home.component';
import {GameAddComponent} from '../component/game-add/game-add.component';
import {GameHomeComponent} from '../component/game-home/game-home.component';

const routes: Routes = [
  {path: '', component: GameListComponent},
  {path: 'category', component: CategoryHomeComponent},
  {path: 'game', component: GameHomeComponent},
  {path: 'category/list', component: CategoryListComponent},
  {path: 'game/list', component: GameListComponent},
  {path: 'category/add', component: CategoryAddComponent, canActivate: [GamesGuard]},
  {path: 'game/add', component: GameAddComponent, canActivate: [GamesGuard]},
  {
    path: 'category/category/:id', component: CategoryDetailComponent, resolve: {
      category: CategoryDetailResolverService
    }
  },
  {path: 'admin', component: AdminComponent, canActivate: [GamesGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class RouterRoutingModule {
}
