import { Component } from '@angular/core';
import { TableService } from 'src/app/shared/table.service';

@Component({
  selector: 'app-navbar-overview',
  templateUrl: './navbar-overview.component.html',
  styleUrls: ['./navbar-overview.component.scss']
})
export class NavbarOverviewComponent
{
  /**
   * The active column
   */
  public active: string = 'price';

  constructor( private tableService: TableService ) { }

  /**
   * Sends the price columns
   */
  public sendPriceColumns(){
    this.active = 'price';
    const columns: string[] = ['name', 'img', 'price', 'mktCap', 'lastChange', 'add'];
    this.tableService.sendColumns(columns);
  }

  /**
   * Sends the change columns
   */
  public sendChangeColumns(){
    this.active = 'change';
    const columns: string[] = ['name', 'img','changeHour', 'change24Hour', 'changeDay', 'add'];
    this.tableService.sendColumns(columns);
  }

  /**
   * Sends teh high and low columns
   */
  public sendHighLowColumns(){
    this.active = 'highLow';
    const columns: string[] = ['name', 'img', 'lowHour', 'highHour', 'lowDay', 'highDay', 'add'];
    this.tableService.sendColumns(columns);
  }

  /**
   * Sends the volume columns
   */
  public sendVolumeColumns(){
    this.active = 'volume';
    const columns: string[] = ['name', 'img', 'volumeHour', 'volume24Hour', 'volumeDay', 'add'];
    this.tableService.sendColumns(columns);
  }

}
