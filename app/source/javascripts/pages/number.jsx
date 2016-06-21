import React from 'react';
import NumberComponent from '../components/_insert-number';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <NumberComponent />
      </div>
    )
  }
}
