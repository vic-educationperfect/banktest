import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent, LoginComponent } from "./_components/auth/index";
import { HomeComponent } from "./_components/home/home.component";
import { AuthGuard } from "./_guards/auth.guard";
import { ProfileComponent } from "./_components/profile/profile.component";
import { TransactionHistoryComponent } from "./_components/transaction-history/transaction-history.component";
import { TransferMoneyComponent } from "./_components/transfer-money/transfer-money.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "profile",
    canActivate: [AuthGuard],
    children: [
      { path: "", component: ProfileComponent },

      { path: "edit", component: ProfileComponent },
    ],
  },
  {
    path: "transaction",
    canActivate: [AuthGuard],
    component: TransactionHistoryComponent,
  },
  {
    path: "transfer",
    canActivate: [AuthGuard],
    component: TransferMoneyComponent,
  },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "" },
];

export const routing = RouterModule.forRoot(appRoutes);
