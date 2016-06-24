import React from 'react';

import FeedComponent from '../components/_feed';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <FeedComponent />
      </div>
    )
  }
}
