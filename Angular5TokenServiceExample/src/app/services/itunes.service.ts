import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../services/token.service';
import { IITunesResponse } from '../models/ITunesEntities';

@Injectable()
export class ITunesService {

  private static ITUNES_API_ROOT_URL = 'https://itunes.apple.com/search';

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  public async Search(term: string): Promise<IITunesResponse> {
    const apiEndpointUrl: string = `${ITunesService.ITUNES_API_ROOT_URL}?term=${term}&media=music&limit=20`;
    const token: string = await this.tokenService.Token;

    const headers: HttpHeaders = new HttpHeaders({
      MySecretToken: token,
    });

    const iTunesResponse: Observable<IITunesResponse> = await this.httpClient.get(apiEndpointUrl, { headers })
      .map((response: IITunesResponse): IITunesResponse => {
        return response;
      })
      .retry(2);

    return iTunesResponse.toPromise();
  }

}
