import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './core/services/auth-guard.service';
import {NoAuthGuardService} from './core/services/no-auth-guard.service';


const routes: Routes = [
    {path: 'posts', canActivate: [AuthGuardService], loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
    {path: 'auth', canActivate: [NoAuthGuardService], loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
