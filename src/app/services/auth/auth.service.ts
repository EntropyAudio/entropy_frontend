import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {Amplify, fetchAuthSession, Hub} from "@aws-amplify/core";
import awsconfig from '../../../environments/aws-environment';
import {getCurrentUser, signInWithRedirect, signOut} from "@aws-amplify/auth";

export interface AuthUser {
  username: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<AuthUser | null>(null);
  public userObservable = this.userSubject.asObservable();
  public user: AuthUser | null = null;

  constructor() {
    Amplify.configure(awsconfig);

    this.userObservable.subscribe(user => {
      this.user = user;
    });

    Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case 'signedIn':
          this.checkCurrentUser();
          break;
        case 'signedOut':
          this.userSubject.next(null);
          break;
      }
    });

    this.checkCurrentUser();
  }

  public signIn() {
    return signInWithRedirect();
  }

  public signOut() {
    return signOut();
  }

  public async checkCurrentUser(): Promise<void> {
    try {
      const { username, userId } = await getCurrentUser();
      this.userSubject.next({ username, userId });
    } catch (error) {
      this.userSubject.next(null);
    }
  }

  public async getAccessToken(): Promise<string | null> {
    try {
      const session = await fetchAuthSession();
      return session.tokens?.accessToken.toString() ?? null;
    } catch (error) {
      return null;
    }
  }

  // loginWithGoogle() {
  //   const provider = new GoogleAuthProvider();
  //   return this.auth.signInWithPopup(provider);
  //   // return this.auth.signInWithRedirect(provider);
  // }
}
