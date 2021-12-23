import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from '../_models/transaction';
import { mockTransactionHistory } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {

  constructor() { }

  getTransactionHistory(): Observable<Transaction[]> {
    return of(mockTransactionHistory).pipe(map(items => {
      return items.sort((a, b) => +b.time - +a.time);
    }))
  }
}
