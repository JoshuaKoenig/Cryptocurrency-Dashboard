import { ChartDataSets } from "chart.js";

export interface Coin
{
    /**
     * The coins short name
     */
    coin?: string;

    /**
     * The coins full name
     */
    fullName?: string;

    /**
     * The day changes 
     */
    changeDay?: number;

    /**
     * The hour changes
     */
    changeHour?: number;

    /**
     * The high day price
     */
    highDay?: number;

    /**
     * The high hour price
     */
    highHour?: number;

    /**
     * The low day price
     */
    lowDay?: number;

    /**
     * The low hour price
     */
    lowHour?: number;

    /**
     * The image url
     */
    image?: string;

    /**
     * The last update
     */
    lastUpdate?: string;

    /**
     * The market cap
     */
    marketCap?: number;

    /**
     * The current price
     */
    currentPrice?: number;

    /**
     * The day volume
     */
    volumeDay?: number;

    /**
     * The hour volume
     */
    volumeHour?: number;

    /**
     * The chart data set
     */
    chartDataSet?: ChartDataSets[];
}