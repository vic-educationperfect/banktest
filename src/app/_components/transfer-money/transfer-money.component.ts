import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSelectChange, MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { Account, Bank, TransferMoneyRequest } from "../../_models/transfer";
import { TransferService } from "../../_services/transfer.service";

@Component({
  selector: "app-transfer-money",
  templateUrl: "./transfer-money.component.html",
  styleUrls: ["./transfer-money.component.scss"],
})
export class TransferMoneyComponent implements OnInit {
  accounts: Account[] = [];
  banks: Bank[] = [];
  currentBalance: number;
  transferMoneyForm = new FormGroup({
    fromAccountNumber: new FormControl("", Validators.required),
    toAccountNumber: new FormControl("", Validators.required),
    beneficiaryBank: new FormControl("", Validators.required),
    beneficiaryName: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
  });

  constructor(
    private _snackBar: MatSnackBar,
    private transferService: TransferService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.transferService.getAvailableAccounts().subscribe((accounts) => {
      this.accounts = accounts;
      if (!this.transferMoneyForm.get("fromAccountNumber").value) {
        // no value => auto fill first one
        this.transferMoneyForm
          .get("fromAccountNumber")
          .patchValue(accounts[0].accountNumber);
        this.currentBalance = accounts[0].amount;
      }
    });

    this.transferService.getBeneficiaryBankList().subscribe((banks) => {
      this.banks = banks;
    });
  }

  onAccountChange(account: MatSelectChange) {
    this.currentBalance = this.accounts.find(
      (item) => item.accountNumber === account.value
    ).amount;
  }

  onSubmit() {
    if (this.transferMoneyForm.invalid) {
      return;
    }

    const data: TransferMoneyRequest = this.transferMoneyForm.value;
    this.transferService.transferMoney(data).subscribe((res) => {
      if (res) {
        this._snackBar.open("Transfer successful", "Close", {
          duration: 3000,
        });
        this.router.navigate(["/"]);
      }
    });
  }
}
