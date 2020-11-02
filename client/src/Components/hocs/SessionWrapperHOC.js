import React from "react";
import { Query } from "react-apollo";
import { GET_ACTIVE_USER } from "../../graphql/user/queries";
import Loading from '../Loading/Loading';

const SessionWrapperHOC = Component => props => (
  <Query query={GET_ACTIVE_USER}>
    {({ data, loading, refetch }) => {
      if (loading) return <Loading />;
      
      return <Component session={data} refetch={refetch} {...props} />;
    }}
  </Query>
);

export default SessionWrapperHOC;
