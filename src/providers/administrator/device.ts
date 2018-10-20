import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Device } from '../../entities/device';
import { DeviceForm } from '../../forms/deviceform';
import { CryptoWalletResponse } from '../../responses/cryptowalletresponse';

let url = "http://localhost:8080";


@Injectable()
export class AdministratorDeviceProvider {

  private readonly allDevicesPath: string = url + "/api/cryptowallet/administrator/TOKEN/device";
  private readonly getDevicePath: string = url + "/api/cryptowallet/administrator/TOKEN/device/ID";
  private readonly insertDevicePath: string = url + "/api/cryptowallet/administrator/TOKEN/device";
  private readonly updateDevicePath: string = url + "/api/cryptowallet/administrator/TOKEN/device/ID";
  private readonly deleteDevicePath: string = url + "/api/cryptowallet/administrator/TOKEN/device/ID";

  constructor(private http: HttpClient) {}

  public allDevices(token: string): Observable<CryptoWalletResponse<Array<Device>>> {
    return this.http.get<CryptoWalletResponse<Array<Device>>>(this.allDevicesPath.replace("TOKEN", token));
  }

  public getDevice(token: string, deviceId: number): Observable<CryptoWalletResponse<Device>> {
    return this.http.get<CryptoWalletResponse<Device>>(this.getDevicePath.replace("TOKEN", token).replace("ID", deviceId.toString()));
  }

  public insertDevice(token: string, deviceForm: DeviceForm): Observable<CryptoWalletResponse<Device>> {
    return this.http.post<CryptoWalletResponse<Device>>(this.insertDevicePath.replace("TOKEN", token), deviceForm);
  }

  public updateDevice(token: string, deviceForm: DeviceForm): Observable<CryptoWalletResponse<Device>> {
    return this.http.put<CryptoWalletResponse<Device>>(this.updateDevicePath.replace("TOKEN", token).replace("ID", deviceForm.id.toString()), deviceForm);
  }

  public deleteDevice(token: string, device: Device): Observable<CryptoWalletResponse<Device>> {
    return this.http.delete<CryptoWalletResponse<Device>>(this.deleteDevicePath.replace("TOKEN", token).replace("ID", device.id.toString()));
  }
}
