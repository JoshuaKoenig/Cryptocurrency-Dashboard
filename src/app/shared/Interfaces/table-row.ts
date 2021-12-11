export interface TableRow
{
    /**
     * The coins short name
     */
    coinShort?: string;

    /**
     * The coins full name
     */
    coinNameFull?: string;

    /**
     * The img sry
     */
    imgSrc?: string;

    /**
     * The pice
     */
    price?: number;

    /**
     * The market cap
     */
    marketCap?: number;

    /**
     * The last update
     */
    lastUpdate?: string;

    /**
     * The hour changes
     */
    changeHour?: number;

    /**
     * The 24 hour changes
     */
    change24Hour?: number;

    /**
     * The day changes
     */
    changeDay?: number;

    /**
     * The low hour price
     */
    lowHourPrice?: number;

    /**
     * The high hour price
     */
    highHourPrice?: number;

    /**
     * The low day price
     */
    lowDayPrice?: number;

    /**
     * The high day price
     */
    highDayPrice?: number;

    /**
     * The hour volume
     */
    volumeHour?: number;

    /**
     * The 24 hour volume
     */
    volume24Hour?: number;

    /**
     * The day volume
     */
    volumeDay?: number;

    /**
     * Whether dashboard add button is disabled
     */
    isDisabled?: boolean;
}