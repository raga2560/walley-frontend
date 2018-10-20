import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Theme } from '../../entities/theme';
import { ThemeForm } from '../../forms/themeform';
import { CryptoWalletResponse } from '../../responses/cryptowalletresponse';

let url = "http://localhost:8080";


@Injectable()
export class AdministratorThemeProvider {

  private readonly allThemesPath: string = url + "/api/cryptowallet/administrator/TOKEN/theme";
  private readonly getThemePath: string = url + "/api/cryptowallet/administrator/TOKEN/theme/ID";
  private readonly insertThemePath: string = url + "/api/cryptowallet/administrator/TOKEN/theme";
  private readonly updateThemePath: string = url + "/api/cryptowallet/administrator/TOKEN/theme/ID";
  private readonly deleteThemePath: string = url + "/api/cryptowallet/administrator/TOKEN/theme/ID";

  constructor(private http: HttpClient) {}

  public allThemes(token: string): Observable<CryptoWalletResponse<Array<Theme>>> {
    return this.http.get<CryptoWalletResponse<Array<Theme>>>(this.allThemesPath.replace("TOKEN", token));
  }

  public getTheme(token: string, themeId: number): Observable<CryptoWalletResponse<Theme>> {
    return this.http.get<CryptoWalletResponse<Theme>>(this.getThemePath.replace("TOKEN", token).replace("ID", themeId.toString()));
  }

  public insertTheme(token: string, themeForm: ThemeForm): Observable<CryptoWalletResponse<Theme>> {
    return this.http.post<CryptoWalletResponse<Theme>>(this.insertThemePath.replace("TOKEN", token), themeForm);
  }

  public updateTheme(token: string, themeForm: ThemeForm): Observable<CryptoWalletResponse<Theme>> {
    return this.http.put<CryptoWalletResponse<Theme>>(this.updateThemePath.replace("TOKEN", token).replace("ID", themeForm.id.toString()), themeForm);
  }

  public deleteTheme(token: string, theme: Theme): Observable<CryptoWalletResponse<Theme>> {
    return this.http.delete<CryptoWalletResponse<Theme>>(this.deleteThemePath.replace("TOKEN", token).replace("ID", theme.id.toString()));
  }
}
