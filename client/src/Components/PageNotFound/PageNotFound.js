import React from "react";
import PageNotFoundWithSession from './PageNotFoundWithSession';
import PageNotFoundWithNoSession from './PageNotFoundWithNoSession';
import './PageNotFound.css';

const PageNotFound = ({ session }) => (
  <>
    { session ? <PageNotFoundWithSession /> : <PageNotFoundWithNoSession /> }
  </>
);

export default PageNotFound;
