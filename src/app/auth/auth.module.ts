import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoutingAuthModule} from './routing-auth/routing-auth.module';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [
        CommonModule,
        RoutingAuthModule,
        SharedModule
    ]
})
export class AuthModule {
}
