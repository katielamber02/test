import React from 'react';
import { Query } from 'react-apollo';
import { GET_ACTIVE_USER } from '../../graphql/user/queries';
import { Redirect } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Auth = condition => Component => props => (
  <Query query={GET_ACTIVE_USER}>
    {
      ({ data, loading }) => {
        if(loading) return <Loading />

        return condition(data) ? <Redirect to="/" /> : <Component {...props} />;
      }
    }
  </Query>
)

export default Auth;
