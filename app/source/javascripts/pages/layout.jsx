import React from 'react';
import { Link } from 'react-router';

export default class LayoutApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <header>
          Header Component
        </header>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
