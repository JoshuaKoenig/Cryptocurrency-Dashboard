import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { Card } from 'src/app/shared/Interfaces/card';
import { CardsService } from './../../../shared/cards.service';
import { CoinsService } from './../../../shared/coins.service';
import { DataService } from './../../../shared/data.service';
import { coinPromise } from './../../../shared/Interfaces/coin-promise';

@Component({
  selector: 'app-favorite-coins',
  templateUrl: './favorite-coins.component.html',
  styleUrls: ['./favorite-coins.component.scss'],
})
export class FavoriteCoinsComponent implements OnInit {

  /**
   * The card array
   */
  public cardArray: Card[] = [];

  /**
   * The line chart options
   */
  public lineChartOptions: ChartOptions = {
    responsive: true,
    showLines: true,
    legend: {
      labels: {
        fontSize: 10
      }
    },
    scales: {
      display: true,
      ticks: {
        fontSize: 100
      }
    }
  };

  /**
   * The line chart legend
   */
  public lineChartLegend = false;

  /**
   * The chart type
   */
  public lineChartType: ChartType = 'line';

  /**
   * The line chart plugins
   */
  public lineChartPlugins = [];

  /**
   * The line chart lables
   */
  public lineChartLabels: Label[] = [
    'Day 1',
    'Day 2',
    'Day 3',
    'Day 4',
    'Day 5',
    'Day 6',
    'Today',
  ];

  /**
   * The line chart colors
   */
  public lineChartColors: Color[] = [
    {
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'hsla(236, 12%, 49%, 30%)',
    },
  ];

  /**
   * The promise object for a specific coin
   */
  public promiseObject: coinPromise[] = [];

  /**
   * Whether menu is open with delay
   */
  public isOpen: boolean = false;

  /**
   * Whether menu is open without delay
   */
  public isMenuOpen: boolean = false;

  constructor(
    private dataService: DataService,
    private cardService: CardsService,
    private coinsService: CoinsService
  ) {}

  /**
   * Initialize component
   */
  public ngOnInit(): void
  {
    this.fillCardData();
  }

  /**
   * Fills the card data
   */
  public fillCardData(): void
  {
    this.getCardData();
    this.promiseObject.map((item) => {
      Promise.all(item.promises).then((data) => {
        this.cardArray.push({
          coinName: item.name,
          fullName: this.coinsService.getFullName(item.name),
          price: data[0],
          chartDataSet: [{ data: data[1], label: '' }],
          mktcap: data[2],
          img: data[3],
          changeDay: data[4],
          changesInPercent: data[5]
        });
      });
    });
  }

  /**
   * Deletes the coin from dashboard
   * @param {string} coinName the given coin name
   */
  public delete(coinName: string): void 
  {
    this.cardService.removeCard(coinName);
    this.cardArray = [];
    this.promiseObject = [];
    this.fillCardData();
  }

  /**
   * Changes the menus status with delay for the animation;
   * True if it is open; otherwise false
   */
  public changeMenu(): void
  {
    this.isMenuOpen = !this.isMenuOpen;
    setTimeout(() => {
      this.isOpen = !this.isOpen;
    }, 200);
  }

  private getCardData(): void
  {
    let promiseArray: Promise<any>[] = [];
    this.cardService.getCards().subscribe((card) => {
      card.map((coinName) => 
      {
        promiseArray.push(this.dataService.getPriceByCoin(coinName));
        promiseArray.push(this.dataService.getChartData(coinName, 7));
        promiseArray.push(this.dataService.getMarketCap(coinName));
        promiseArray.push(this.dataService.getImages(coinName, 30));
        promiseArray.push(this.dataService.getChangeDay(coinName));
        promiseArray.push(this.dataService.getChangesInPercent(coinName, 1));

        this.promiseObject.push({ name: coinName, promises: promiseArray });
        promiseArray = [];
      });
    });
  }
}
