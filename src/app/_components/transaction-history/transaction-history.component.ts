import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Transaction } from "../../_models/transaction";
import { TransactionHistoryService } from "../../_services/transaction-history.service";

@Component({
  selector: "app-transaction-history",
  templateUrl: "./transaction-history.component.html",
  styleUrls: ["./transaction-history.component.scss"],
})
export class TransactionHistoryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ["time", "receiptNo", "amount", "description"];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private transactionHistoryService: TransactionHistoryService) {

  }

  ngOnInit() {
    this.transactionHistoryService.getTransactionHistory().subscribe(transactions => {
      this.dataSource = new MatTableDataSource<Transaction>(transactions);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
