import React, { Component } from 'react';
import Auth from '../../../hocs/Auth';

class Computer extends Component {
  render() {
    return (
      <div>
        Computer Category
      </div>
    )
  }
}

export default Auth(session => session && session.activeUser)(Computer);
