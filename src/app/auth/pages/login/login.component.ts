import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    errorMessage: string;
    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        this.initForm();
        console.log(this.email);
    }

    initForm() {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/.{6,}/)]],
        });
    }

    onSubmit() {
        const email = this.signupForm.get('email').value;
        const password = this.signupForm.get('password').value;
        this.authService.signinWithEmailAndPass(email, password)
            .catch(error => {
                this.errorMessage = error;
            });
    }

    onSignInWithGoogle() {
        this.authService.signInWithGoogle()
            .then((user) => {
                alert('connected !');
                console.log(user);
            })
            .catch((error) => {
                this.errorMessage = error;
            });
    }

    get email() {
        return this.signupForm.get('email');
    }

    get password() {
        return this.signupForm.get('password');
    }
}
