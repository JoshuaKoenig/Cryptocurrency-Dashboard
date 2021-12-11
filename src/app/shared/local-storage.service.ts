import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * The local storage
   */
  private localStorage: Storage = window.localStorage;

  /**
   * Gets the current value
   * @param {string} key the key
   * @returns {string | null} the current value for a key; or null if key doesn't exists
   */
  public get(key: string): string | null
  {
    return this.localStorage.getItem(key);
  }

  /**
   * Sets the current value
   * @param {string} key the key
   * @param {string} value the new value
   */
  public set(key: string, value: string)
  {
    this.localStorage.setItem(key, value);
  }

}
