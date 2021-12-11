import { CoinsService } from './../../../shared/coins.service';
import { TableRow } from './../../../shared/Interfaces/table-row';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { TableService } from 'src/app/shared/table.service';
import { CardsService } from './../../../shared/cards.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  /**
   * The table rows array
   */
  public tableRows: TableRow[] = [];

  /**
   * The object keys
   */
  public objectKeys = Object.keys;

  /**
   * All the coins to display
   */
  public allCoins: string[] = [];

  /**
   * The table columns header
   */
  displayedColumns: string[] = [
    'name',
    'img',
    'price',
    'mktCap',
    'lastChange',
    'add',
  ];

  constructor(
    private dataService: DataService,
    private tableService: TableService,
    private coinsService: CoinsService,
    private cardsService: CardsService
  ) {}

  /**
   * Initialize the component
   */
  public ngOnInit(): void
  {
    this.allCoins = this.coinsService.getAllCoins();
    this.changeColumnsEvent();
    this.setupTable();
  }

  /**
   * Set ups the table data
   */
  public setupTable(): void
  {
    this.allCoins.map((coinShortName) => {

      let tableRow: TableRow = {};
      tableRow.coinShort = coinShortName;
      tableRow.coinNameFull = this.coinsService.getFullName(coinShortName);
      tableRow.isDisabled = this.coinAlreadyInDashboard(coinShortName);

      const promise1 = this.dataService.getFullDataByCoin(coinShortName);
      const promise2 = this.dataService.getImages(coinShortName, 35);

      Promise.all([promise1, promise2])
        .then((data) => {
          tableRow.price = data[0].PRICE;
          tableRow.marketCap = data[0].MKTCAP;
          tableRow.lastUpdate = data[0].LASTUPDATE;
          tableRow.changeHour = data[0].CHANGEHOUR;
          tableRow.change24Hour = data[0].CHANGE24HOUR;
          tableRow.changeDay = data[0].CHANGEDAY;
          tableRow.lowHourPrice = data[0].LOWHOUR;
          tableRow.highHourPrice = data[0].HIGHHOUR;
          tableRow.lowDayPrice = data[0].LOWDAY;
          tableRow.highDayPrice = data[0].HIGHDAY;
          tableRow.volumeHour = data[0].VOLUMEHOUR;
          tableRow.volume24Hour = data[0].VOLUME24HOUR;
          tableRow.volumeDay = data[0].VOLUMEDAY;
          tableRow.imgSrc = data[1];
        });

        this.tableRows.push(tableRow);
    })
  }

  /**
   * The columns changed event
   */
  public changeColumnsEvent(): void
  {
    this.tableService.getColumns()
      .subscribe((columns) => {
        this.displayedColumns = columns;
      });
  }

  /**
   * Adds the given coin to dashboard view
   * @param {string} coin the given coin
   */
  public addToDashboard(coin?: string): void
  {
    if (coin)
    {
      this.cardsService.addCard(coin);
    }
  }

  /**
   * Checks whether the icon is already in dashboard
   * @param {string} coinName the given coin name
   * @returns {boolean} true if coin already in dashboard; otherwise false
   */
  public coinAlreadyInDashboard(coinName?: string): boolean
  {
    let isCoinAlreadyInDashboard: boolean = false;
    this.cardsService.getCards()
      .subscribe((coins) => {
        coins.map((coin) => {
          if (coin === coinName)
          {
            isCoinAlreadyInDashboard = true;
          }
        });
    });
    return isCoinAlreadyInDashboard;
  }
}
