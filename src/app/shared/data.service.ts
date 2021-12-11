import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) {}

  /**
   * Gets the price for a given coin
   * @param {string} coin - The coin name 
   * @returns {Promise<any>}
   */
  public getPriceByCoin(coin: string): Promise<any>
  {
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=EUR`;
    return this.http.get<any>(url)
      .toPromise()
      .then((data) => data.EUR);
  }

  /**
   * Gets the full data for a given coin
   * @param {string} coin - The coin name
   * @returns {Promise<any>}
   */
  public getFullDataByCoin(coin: string): Promise<any>
  {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin},&tsyms=EUR`;
    return this.http.get<any>(url)
      .toPromise()
      .then((data) => {
        return data?.DISPLAY[coin]?.EUR
      });
  }

  /**
   * Gets the chart data
   * @param {string} coin - The given coin name 
   * @param {number} rangeInDays - The range in days 
   * @returns {Promise<any>}
   */
  public getChartData(coin: string, rangeInDays: number): Promise<any>
  {
    const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=EUR&limit=${rangeInDays-1}`;
    return this.http.get<any>(url)
      .toPromise()
      .then((result) => {
        return result.Data.Data.map((datHigh: any) => datHigh.high );
      });
  }

  /**
   * Gets the market cap for a given coins
   * @param {string} coin - The given coin 
   * @returns {Promise<any>}
   */
  public getMarketCap(coin: string): Promise<any>
  {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin},&tsyms=EUR`;
    return this.http.get<any>(url)
    .toPromise()
    .then((data) => {
      return data.DISPLAY[coin].EUR.MKTCAP;
    });
  }

  /**
   * Gets the change of day for a given coin
   */
  public getChangeDay(coin: string): Promise<any>
  {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin},&tsyms=EUR`;
    return this.http.get<any>(url)
      .toPromise()
      .then((data) => {
        return data.DISPLAY[coin].EUR.CHANGEDAY;
      });
  }

  /**
   * Gets the image for a given coin
   * @param {string} coin - The given coin 
   * @param {number} width - The width of the image 
   * @returns {Promise<any>}
   */
  public getImages(coin: string, width: number): Promise<any>
  {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin},&tsyms=EUR`;
    return this.http.get<any>(url)
    .toPromise()
    .then((data) => `https://www.cryptocompare.com${data?.DISPLAY[coin].EUR.IMAGEURL}?width=${width}`);
  }

  public getChangesInPercent(coin: string, range: number): Promise<any>
  {
    const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=EUR&limit=${range}`;
    return this.http.get<any>(url).toPromise()
      .then((data) => {
        return data.Data.Data;
      })
      .then((data) => {
        return (100 * (data[1].high - data[0].high)) / data[0].high;
      });
  }
  
}
