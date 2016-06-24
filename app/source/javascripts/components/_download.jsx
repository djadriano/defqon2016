import React from 'react';
import io from 'socket.io-client';

export default class DownloadComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const socketIo = io.connect(window.location.host, { reconnect: true });

    this.setState({
      tweets: []
    }, () => {
      this.socketEvents(socketIo);
    });
  }

  socketEvents(socketIo) {
    socketIo.on('connect', () => {
      console.log('socket connected');
    });

    socketIo.on('getFeedFirstTime', (data) => {
      console.log('tweets', data.tweets);
      this.setState({
        tweets: data.tweets
      })
    });

    socketIo.on('hasNewContents', (data) => {
      console.log('tweets hasNewContents', data.tweets);
    });
  }

  renderTweets(tweets) {
    return(
      <ul>
        {this.state.tweets.map((item, i) => {
          return <li key={i}>{item.text}</li>
        })}
      </ul>
    )
  }

  render() {
    return(
      <section className="nklck-download">
        {this.renderTweets()}
      </section>
    )
  }
}
