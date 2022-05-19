import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { getproductsReducer } from 'src/Store/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from 'src/Store/Effects/productEffect';
@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ productsList: getproductsReducer }, {}),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([ProductEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
