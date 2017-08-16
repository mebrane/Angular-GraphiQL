import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';


// We use the gql tag to parse our query string into a query document


interface QueryResponse {
  users;
  loading;
}


@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.css']
})
export class GraphqlComponent implements OnInit {

  query= `
  query users{
    users{
      
        id
        email
      
    }
  }
  `;
  response: any;
  error: any;

  constructor(private apollo: Apollo) {}


  ngOnInit() {

  }

  sendQuery() {
	  this.error=null;
	  this.response='';
    this.apollo.watchQuery<QueryResponse>({
      query: gql`${this.query}`
    }).subscribe(
      ({data}) => {
      // this.loading = data.loading;
      this.response = data;
      console.log('data', data);
    },
    (error) => {
		this.response=error;
      this.error = error;
      console.log('error', error);
  });
  }

}
