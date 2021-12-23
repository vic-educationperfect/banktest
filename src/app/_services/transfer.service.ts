import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account, Bank, TransferMoneyRequest } from '../_models/transfer';
import { accounts, banks } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  getAvailableAccounts(): Observable<Account[]> {
    return of(accounts);
  }

  getBeneficiaryBankList(): Observable<Bank[]> {
    return of(banks);
  }

  transferMoney(data: TransferMoneyRequest) {
    return of(true);
  }
}
