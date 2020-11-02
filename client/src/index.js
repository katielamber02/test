import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token") || null
      }
    });
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
