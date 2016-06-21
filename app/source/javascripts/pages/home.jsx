import React from 'react';

import JoinComponent from '../components/_join';
import VideoComponent from '../components/_video';
import StepComponent from '../components/_step';
import DownloadComponent from '../components/_download';
import OlympicsComponent from '../components/_olympics';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <JoinComponent />
        <VideoComponent />
        <StepComponent />
        <DownloadComponent />
        <OlympicsComponent />
      </div>
    )
  }
}
