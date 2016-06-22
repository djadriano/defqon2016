import React from 'react';

import DownloadComponent from '../components/_download';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <DownloadComponent />
      </div>
    )
  }
}
