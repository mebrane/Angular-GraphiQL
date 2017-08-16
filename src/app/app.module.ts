import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { GraphqlModule } from './graphql/graphql.module';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GraphqlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
