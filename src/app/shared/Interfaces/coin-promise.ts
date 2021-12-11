export interface coinPromise
{
    /**
     * The coin name
     */
    name: string;

    /**
     * The promises for a specific coin
     */
    promises: Promise<any>[];
}