import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {reject} from 'q';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
    }

    signInWithGoogle() {
        return new Promise((resolve, reject) => {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    resolve(result.user);
                }).catch((error) => {
                    reject(error.message);
                });
        });
    }

    signinWithEmailAndPass(email, password) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error.message);
                });
        });
    }

    signupWithEmailAndPass(email, password) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error.message);
                });
        });
    }

    signOutUsr() {
        firebase.auth().signOut();
    }
}
