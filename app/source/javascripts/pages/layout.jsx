import React from 'react';
import { Link } from 'react-router';
import io from 'socket.io-client';

export default class LayoutApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const socketIo = io.connect(window.location.host, { reconnect: true });
    socketIo.on('connect', () => {
      console.log('socket connected');
    });
  }

  render() {
    return(
      <div>
        <header>
          Header Component
          <hr />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/success">Success</Link></li>
            <li><Link to="/logged">Logged</Link></li>
            <li><Link to="/ipad">Ipad</Link></li>
          </ul>
        </header>
        <div data-gadget="nike.gadget.OneNikeNav"></div>
        <hr />
        {this.props.children}
        <hr />
        <footer>footer component</footer>
      </div>
    )
  }
}
