import React from 'react';
import axios from 'axios';

import LoginComponent from '../components/_login';
import PhoneComponent from '../components/_phone';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <LoginComponent />
        <PhoneComponent />
      </div>
    )
  }
}
