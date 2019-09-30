import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { NavComponent } from './Components/nav/nav.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

// Services & Pipes
import { ProductService } from './Services/product.service';
import { OrderByPipe } from './Pipes/order-by.pipe';
import { SearchPipe } from './Pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NewProductComponent,
    NavComponent,
    OrderByPipe,
    SearchPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/product-list', pathMatch: 'full' },
      { path: 'product-list', component: ProductListComponent },
      { path: 'new-product', component: NewProductComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
