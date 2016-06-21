import React from 'react';

import MotivationalComponent from '../components/_motivational-message';
import OlympicsComponent from '../components/_olympics';
import DownloadComponent from '../components/_download';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <MotivationalComponent />
        <OlympicsComponent />
        <DownloadComponent />
      </div>
    )
  }
}
