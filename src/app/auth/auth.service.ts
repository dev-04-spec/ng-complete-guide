import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string; //A Firebase Auth ID token for the newly created user.
  email: string; //The email for the newly created user.
  refreshToken: string; //	A Firebase Auth refresh token for the newly created user.
  expiresIn: string; //	The number of seconds in which the ID token expires.
  localId: string; //	The uid of the newly created user.
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgfGuqv2WNPcjFyBgfzxcD5u-6o37klDo',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes) => {
          console.log(errorRes.error.error.message);
          let errorMessage = 'An unknown error message occurred';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage =
                'The email address is already in use by another account';
                break;
                case 'OPERATION_NOT_ALLOWED':
                  errorMessage =
                    'Password sign-in is disabled for this project';
                break;
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                  errorMessage =
                    'We have blocked all requests from this device due to unusual activity. Try again later.';
                break;
                default:
                  errorMessage;
          }
          return throwError(errorMessage);
        })
      );
  }
}
