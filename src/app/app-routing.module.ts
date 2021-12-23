import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent, LoginComponent } from "./_components/auth/index";
import { HomeComponent } from "./_components/home/home.component";
import { AuthGuard } from "./_guards/auth.guard";
import {
  AllDummyComponent,
  CreateDummyComponent,
  EditDummyComponent,
  ShowDummyComponent,
} from "./_components/dummy/index";
import { ProfileComponent } from "./_components/profile/profile.component";
import { TransactionHistoryComponent } from "./_components/transaction-history/transaction-history.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "dummies",
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "all", pathMatch: "full" },
      {
        path: "all",
        children: [
          { path: "", redirectTo: "1", pathMatch: "full" },
          { path: ":page_no", component: AllDummyComponent },
        ],
      },
      { path: "create", component: CreateDummyComponent },
      { path: "edit/:id", component: EditDummyComponent },
      { path: "show/:id", component: ShowDummyComponent },
    ],
  },
  {
    path: "profile",
    canActivate: [AuthGuard],
    children: [
      { path: "", component: ProfileComponent },

      { path: "edit", component: ProfileComponent },
    ],
  },
  { path: "transaction", component: TransactionHistoryComponent },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "" },
];

export const routing = RouterModule.forRoot(appRoutes);
