import React, { Component } from 'react';
import Auth from '../../../hocs/Auth';

class Television extends Component {
  render() {
    return (
      <div>Television Category</div>
    );
  }
}

export default Auth(session => session && session.activeUser)(Television);
