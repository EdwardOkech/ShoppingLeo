import firebase from 'firebase';
import { User, AuthCredential } from '@firebase/auth-types';
import { Reference } from '@firebase/database-types';
// import { IonicPage } from 'ionic-angular';
// import { Component } from '@angular/core';

// @IonicPage()
// @Component({
//   selector: "page-profile",
//   templateUrl: "profile.html"
// })

export class ProfileProvider {
  public userProfile: Reference;
  public currentUser: User;

  constructor() {
    firebase.auth().onAuthStateChanged( user=> {
      if(user){
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
      }
    });
  }

  getUserProfile(): Reference{
    return this.userProfile;
  }

  updateName(firstName: string, lastName: string): Promise<any> {
    return this.userProfile.update({
      firstName, lastName
    });
  }

  updateDOB(birthDate:string): Promise<any>{
    return this.userProfile.update({ birthDate });
  }

   updateEmail(newEmail: string, password: string): Promise<any> {
        const credential: AuthCredential = firebase.auth.
            EmailAuthProvider.credential(
                this.currentUser.email,
                password
            );
        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(user => {
                this.currentUser.updateEmail(newEmail).then(user => {
                    this.userProfile.update({ email: newEmail });
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    updatePassword(newPassword: string, oldPassword: string): Promise<any> {
        const credential: AuthCredential = firebase.auth
            .EmailAuthProvider.credential(
                this.currentUser.email,
                oldPassword
            );
        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(user => {
                this.currentUser.updatePassword(newPassword).then(user => {
                    console.log('Password Changed');
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
}


