import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {fetchAuthSession} from "@aws-amplify/core";
import { Hub } from 'aws-amplify/utils';
import {getCurrentUser, signOut, signIn} from "@aws-amplify/auth";

export interface AuthUser {
  username: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<AuthUser | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor() {
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

  public async signIn(username: string, password: string): Promise<any> {
    const { isSignedIn, nextStep } = await signIn({
      username,
      password,
      options: {
        authFlowType: 'USER_PASSWORD_AUTH'
      }
    });
    console.log('isSignedIn', isSignedIn, 'nextStep', nextStep);
    return { isSignedIn, nextStep };
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
}
