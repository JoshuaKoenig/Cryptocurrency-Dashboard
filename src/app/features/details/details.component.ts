import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Coin } from 'src/app/shared/Interfaces/coin';
import { CoinsService } from './../../shared/coins.service';
import { DataService } from './../../shared/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  /**
   * The current coin name
   */
  public coinName!: string;

  /**
   * The chart data sets
   */
  public chartDataSet: ChartDataSets[] =[];
  
  /**
   * The line chart options
   */
   public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  /**
   * The line chart legend
   */
  public lineChartLegend = false;

  /**
   * The line chart type
   */
  public lineChartType: ChartType = 'line';

  /**
   * The bar chart type
   */
  public barChartType: ChartType = 'bar'

   /**
   * The pie chart type
   */
    public pieChartType: ChartType = 'horizontalBar'

  /**
   * The line chart plugins
   */
  public lineChartPlugins = [];

  /**
   * The line chart lables
   */
  public lineChartLabels: Label[] = [];

  /**
   * The coin interface
   */
  public coin: Coin = {};

  /**
   * The amount of data, to displayed for chart
   */
  public amountData: number = 10;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly dataServce: DataService,
    private readonly coinsService: CoinsService) {
  }

  /**
   * Initialize component
   */
  public ngOnInit(): void
  {
    this.coinName = this.activatedRoute.snapshot.params.coinName;
    this.coin.coin = this.coinName;
    this.pushChartLabel();
    this.getChartData();
    this.getFullCoinName();
    this.getCoinImage();
    this.getFullData();
  }

  /**
   * Pushes the line chart labels
   */
  private pushChartLabel(): void
  {
    for(let i = 0; i<this.amountData; i++)
    {
      this.lineChartLabels.push(`day ${i+1}`);
    }
  }

  /**
   * Gets the chart data
   */
  private getChartData(): void
  {
    this.dataServce.getChartData(this.coinName, this.amountData)
      .then(data => 
      {
        this.chartDataSet.push( {data: data, label: '', backgroundColor: 'hsla(236, 12%, 49%, 30%)', borderColor: 'white', borderWidth: 2} );
      });
  }

  /**
   * Gets the full name of the coin
   */
  private getFullCoinName(): void
  {
    this.coin.fullName = this.coinsService.getFullName(this.coinName);
  }

  /**
   * Gets the coins image
   */
  private getCoinImage(): void
  {
    this.dataServce.getImages(this.coinName, 30)
      .then((imgUrl) => {
        this.coin.image = imgUrl;
      })
  }

  /**
   * Gets the full data for a given coin
   */
  private getFullData(): void
  {
    this.dataServce.getFullDataByCoin(this.coinName)
      .then((data) => 
        {
          this.coin.currentPrice = data.PRICE;
          this.coin.changeDay = data.CHANGEDAY;
          this.coin.changeHour = data.CHANGEHOUR;
          this.coin.highDay = data.HIGHDAY;
          this.coin.highHour = data.HIGHHOUR;
          this.coin.lastUpdate = data.LASTUPDATE;
          this.coin.lowDay = data.LOWDAY;
          this.coin.lowHour = data.LOWHOUR;
          this.coin.marketCap = data.MKTCAP;
          this.coin.volumeDay = data.VOLUMEDAY;
          this.coin.volumeHour = data.VOLUMEHOUR;
        });
  }

}
