// all angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import 'hammerjs';

// all app modules
import { MaterialModule, CrudModule } from './_modules/index';
import { routing } from './app-routing.module';

// all guards
import { AuthGuard } from './_guards/auth.guard';

// all intercepters
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// all services
import { AuthenticationService, ProfileService, FileService } from './_services/index';

// all components
import { AppComponent } from './_components/app.component';
import { LoginComponent, RegisterComponent } from './_components/auth/index';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { HomeComponent } from './_components/home/home.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { TransactionHistoryComponent } from './_components/transaction-history/transaction-history.component';
import { TransferMoneyComponent } from './_components/transfer-money/transfer-money.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent,
    ProfileComponent,
    TransactionHistoryComponent,
    TransferMoneyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    MaterialModule,
    CrudModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
    AuthenticationService,
    ProfileService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
