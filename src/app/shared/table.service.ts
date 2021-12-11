import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {

  private subject: Subject<string[]> = new Subject();

  /**
   * Send the active columns
   * @param {string[]} columns - The columns array
   */
  public sendColumns(columns: string[])
  {
    this.subject.next(columns);
  }

  /**
   * Gets the active columns
   * @returns {Observable<string[]>}
   */
  public getColumns(): Observable<string[]>
  {
    return this.subject.asObservable();
  }
}
