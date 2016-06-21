import React from 'react';

import SuccessComponent from '../components/_success-message';
import VideoComponent from '../components/_video';
import StepComponent from '../components/_step';
import DownloadComponent from '../components/_download';
import RioComponent from '../components/_olympics';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <VideoComponent />
        <StepComponent />
        <SuccessComponent />
        <DownloadComponent />
        <RioComponent />
      </div>
    )
  }
}
