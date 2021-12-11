import { LocalStorageService } from './../../shared/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private localStorageService: LocalStorageService ) { }

  private key: string = "KEY_FAVORITE_COINS_03";

  /**
   * Initialize component
   */
  public ngOnInit(): void
  {
    if (this.localStorageService.get(this.key) === null)
    {
      this.localStorageService.set(this.key, 'BTC');
    }
  }

}
