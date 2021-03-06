import { Component, Prop } from '@stencil/core';
import ApolloClient from 'apollo-boost';
import { AllPosts } from '../../generated-models';

const client = new ApolloClient({
  uri: 'https://graphql-voter-app.herokuapp.com/'
});

@Component({
  tag: 'my-component-with-codegen',
  styleUrl: 'my-component-with-codegen.css'
})
export class MyComponentWithCodegen {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <apollo-provider client={client}>
      </apollo-provider>
    );
  }
}
