import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  /**
   * The chart dataset
   */
  @Input()
  public chartDataSet!: ChartDataSets[];

  /**
   * The chart lables
   */
  @Input()
  public chartLabels!: Label[];

  /**
   * The chart options
   */
  @Input()
  public chartOptions!: ChartOptions;

  /**
   * The chart colors
   */
  @Input()
  public chartColors!: Color[];

  /**
   * The chart legend
   */
  @Input()
  public chartLegend!: boolean;

  /**
   * The chart type
   */
  @Input()
  public chartType!: ChartType;

  /**
   * The chart plugins
   */
  public chartPlugins = [];

}
