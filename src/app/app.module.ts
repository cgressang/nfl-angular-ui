import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CustomSerializer } from '@core/http/custom-serializer';
import { reducers, metaReducers } from '@store/reducers';
import { effects } from '@store/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from '@core/header/header.component';
import { FooterComponent } from '@core/footer/footer.component';

import { EnvironmentService } from '@core/services/environment.service';

import { environment } from '../environments/environment';

import { MockDataInterceptor } from '@core/interceptors/mock-data.interceptor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    EnvironmentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockDataInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
