import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  /**
   * The dashboard cards array
   */
  public myCards!: string[];

  /**
   * The dashboard cards array converted to string
   */
  public cardString!: string;

  constructor(private localStorage: LocalStorageService) { }

  /**
   * Gets the current cards
   * @returns {Observable<string[]>}
   */
  public getCards(): Observable<string[]>
  {
    this.cardString = <string> this.localStorage.get('KEY_FAVORITE_COINS_03');
    this.myCards = this.cardString.split(',');
    return of(this.myCards);
  }

  /**
   * Adds the given coin to dashboard
   * @param {string} coin the coin 
   */
  public addCard(coin: string): void
  {
    this.cardString = `${this.cardString},${coin}`;
    this.localStorage.set('KEY_FAVORITE_COINS_03', this.cardString);
  }

  /**
   * Removes the current coin from dashboard
   */
  public removeCard(coin: string)
  {
    this.myCards = this.cardString.split(',');

    this.myCards.map((item, index) => {
      if(item === coin)
      {
        this.myCards.splice(index,1);
      }
    });
    
   this.cardString = this.myCards.toString();
   this.localStorage.set('KEY_FAVORITE_COINS_03', this.cardString);
   return of(this.myCards);
  }
}
