import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BitcoinNetworkProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BitcoinNetworkProvider Provider');
  }

}
