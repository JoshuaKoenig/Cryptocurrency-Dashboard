import { ChartDataSets } from 'chart.js';
import { SingleDataSet } from 'ng2-charts';
export interface Card
{
    /**
     * The coins short name
     */
    coinName: string,

    /**
     * The coins full name
     */
    fullName: string,

    /**
     * The chart data sets
     */
    chartDataSet: ChartDataSets[],

    /**
     * The current price
     */
    price: number,

    /**
     * The change day
     */
    changeDay: string,

    /**
     * Shows the changes per day in percent
     */
    changesInPercent: number, 

    /**
     * The market cap
     */
    mktcap: number,

    /**
     * The img url
     */
    img: string
}