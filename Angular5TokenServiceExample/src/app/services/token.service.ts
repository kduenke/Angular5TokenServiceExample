import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class TokenService {

  private static TOKEN_API_ROOT_URL = 'http://httpbin.org/get';

  private token: Promise<string>;
  public get Token(): Promise<string> {
    if (!this.TokenAlive()) {
      this.token = this.RefreshToken();
    }

    return this.token;
  }

  constructor(private httpClient: HttpClient) { }

  private TokenAlive(): boolean {
    // Randomly expire the token
    const tokenExpired: boolean = Math.random() < 0.5;

    return (this.token && tokenExpired);
  }

  private async RefreshToken(): Promise<string> {
    const token: Observable<string> = await this.httpClient.get(TokenService.TOKEN_API_ROOT_URL)
      .map((response): string => {
        // Create a fake, random token
        return Math.random().toString(36).substring(2);
      })
      .retry(2);

    return token.toPromise();
  }

}
