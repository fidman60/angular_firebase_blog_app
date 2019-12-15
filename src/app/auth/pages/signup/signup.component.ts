import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    errorMessage: string;
    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/.{6,}/)]]
        });
    }

    onSubmit() {
        const email = this.email.value;
        const password = this.password.value;
        this.authService.signupWithEmailAndPass(email, password)
            .then(() => alert('connected !'))
            .catch(error => this.errorMessage = error);
    }

    get email() {
        return this.signupForm.get('email');
    }

    get password() {
        return this.signupForm.get('password');
    }

}
