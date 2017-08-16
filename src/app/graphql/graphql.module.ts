import { ApolloClient } from 'apollo-client';
import { ApolloModule } from 'apollo-angular/build/src/ApolloModule';
import { CommonModule } from '@angular/common';
import { createNetworkInterface } from 'apollo-client/transport/networkInterface';
import { FormsModule } from '@angular/forms';
import { GraphqlComponent } from './graphql.component';
import { NgModule } from '@angular/core';

const client  = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8000/graphql'
  })
});
export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  imports: [
    CommonModule,
    ApolloModule.forRoot(provideClient),
    FormsModule,
  ],
  declarations: [GraphqlComponent],
  exports: [
    ApolloModule,
    GraphqlComponent,
  ]
})
export class GraphqlModule { }
