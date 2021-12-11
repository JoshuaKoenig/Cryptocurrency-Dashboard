import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor() {}

  /**
   * All available coins
   */
  public allCoins: string[] = [
    'BTC', 'ETH', 'BCH', 'NEO', 'LTC', 'DASH', 'SOL', 'AXS', 'XRP', 'DOGE',
    'SAND', 'SHIB', 'MANA', 'STORJ', 'BUSD', 'QTUM', 'TRX', 'ADA', 'CHZ', 'DOT'
  ];

  /**
   * Gets the full names of coins
   * @param {string} name
   * @returns {string} the full coin name
   */
  public getFullName(name: string): string {

    let currentName: string;

    switch (name) {
      case 'BTC':
        currentName = 'Bitcoin';
        break;
      case 'ETH':
        currentName = 'Ethereum';
        break;
      case 'DASH':
        currentName = 'Dash';
        break;
      case 'SOL':
        currentName = 'Solana';
        break;
      case 'AXS':
        currentName = 'Axie Infinity Shards';
        break;
      case 'LTC':
        currentName = 'Litecoin';
        break;
      case 'BCH':
        currentName = 'Bitcoin Cash';
        break;
      case 'NEO':
        currentName = 'NEO';
        break;
      case 'XPR':
        currentName = 'XPR';
        break;
      case 'DOT':
        currentName = 'Polkadot';
        break;
      case 'CHZ':
        currentName = 'Chiliz';
        break;
      case 'ADA':
        currentName = 'Cardano';
        break;
      case 'TRX':
        currentName = 'Tron';
        break;
      case 'QTUM':
        currentName = 'QTUM';
        break;
      case 'BUSD':
        currentName = 'BUSD';
        break;
      case 'STORJ':
        currentName = 'Storj';
        break;
      case 'MANA':
        currentName = 'Decentraland';
        break;
      case 'SHIB':
        currentName = 'Shiba Inu';
        break;
      case 'SAND':
        currentName = 'The Sandbox';
        break;
      case 'DOGE':
        currentName = 'Dogecoin';
        break;
      default:
        currentName = name;
    };
    return currentName;
  }

  /**
   * Gets all the coins
   * @returns {string[]} the coins
   */
  public getAllCoins(): string[]
  {
      return this.allCoins;
  }
  
}
