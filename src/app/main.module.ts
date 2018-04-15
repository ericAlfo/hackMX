import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { ProductsComponent } from './products/products.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { CategoriesService } from './services/categories.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user/:userId/data', component: DataComponent },
  { path: 'user/:userId/credit-cards', component: CreditCardsComponent },
  { path: 'products/:userId', component: ProductsComponent }
]

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegistrationComponent,
    DataComponent,
    CreditCardsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    HttpModule
  ],
  providers: [UserService, CategoriesService],
  bootstrap: [MainComponent]
})
export class MainModule { }
