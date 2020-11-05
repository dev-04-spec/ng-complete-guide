import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules,
} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then((r) => r.RecipesModule),
  },
  {
    path: 'shopping-list',

    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(
        (s) => s.ShoppingListModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((a) => a.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
