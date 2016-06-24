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
          <h1>Defqon1</h1>
        </header>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
