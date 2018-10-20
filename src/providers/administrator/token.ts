import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Token } from '../../entities/token';
import { CryptoWalletResponse } from '../../responses/cryptowalletresponse';

let url = "http://localhost:8080";


@Injectable()
export class AdministratorTokenProvider {

  private readonly allTokensPath: string = url + "/api/cryptowallet/administrator/TOKEN/token";
  private readonly getTokenPath: string = url + "/api/cryptowallet/administrator/TOKEN/token/ID";
  private readonly deleteTokenPath: string = url + "/api/cryptowallet/administrator/TOKEN/token/ID";

  constructor(private http: HttpClient) {}

  public allTokens(token: string, userId: number): Observable<CryptoWalletResponse<Array<Token>>> {
    return this.http.get<CryptoWalletResponse<Array<Token>>>(this.allTokensPath.replace("TOKEN", token));
  }

  public getToken(token: string, tokenId: number): Observable<CryptoWalletResponse<Token>> {
    return this.http.get<CryptoWalletResponse<Token>>(this.getTokenPath.replace("TOKEN", token).replace("ID", tokenId.toString()));
  }

  public deleteToken(token: string, token_: Token): Observable<CryptoWalletResponse<Token>> {
    return this.http.delete<CryptoWalletResponse<Token>>(this.deleteTokenPath.replace("TOKEN", token).replace("ID", token_.id.toString()));
  }
}
