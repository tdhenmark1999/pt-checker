import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckersListComponent } from './components/checkers-list/checkers-list.component';
import { AuthGuard } from './services/auth.guard';
import {environment} from '../environments/environment';
import {EnvServiceProvider} from './services/env.service.provider';


@NgModule({
  declarations: [
    AppComponent,
    CheckersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    EnvServiceProvider,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
