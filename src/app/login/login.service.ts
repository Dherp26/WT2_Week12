import { Injectable } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

@Injectable({ providedIn: "root" })
export class LoginService {
    constructor() { }

    isLoggedIn() {
        return new Promise((resolve, reject) => {
            firebase
                .getCurrentUser()
                .then((user) => {
                    // user ada, artinya sudah login
                    resolve(user);
                })
                .catch((err) => {
                    // user tidak ada, artinya belum login/login sudah kedaluwarsa
                    reject(err);
                });
        });
    }

    login() {
        return new Promise((resolve, reject) => {
            firebase.login({
                type: firebase.LoginType.FACEBOOK,
                facebookOptions: {
                    scope: ['public_profile', 'email', 'user_friends']
                }
            }).then(
                function (fb_result) {

                    var fb_access_token = fb_result.providers[1].token;

                    // next: add code for checking if user is new or not

                },
                function (err) {
                    console.log('error logging in to facebook: ', err);
                }
            );
        });
    }

    logout() {
        firebase.logout();
    }
}
