import React from 'react';
import io from 'socket.io-client';

export default class DownloadComponent extends React.Component {
  constructor(props) {
    super(props);

    this.lastTweetReceived = null;
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
      this.setState({
        tweets: data.tweets
      })
    });

    socketIo.on('hasNewContents', (data) => {
      console.log(this.state.tweets);
      console.log('------------------');
      console.log(data.tweets);

      let currentTweets = this.state.tweets;

      if( this.lastTweetReceived ) {
        if( this.lastTweetReceived !== data.tweets.text ) {
          let newTweets = currentTweets.unshift(data.tweets);
        }
      } else {
        let newTweets = currentTweets.unshift(data.tweets);
      }

      this.lastTweetReceived = data.tweets.text;

      this.setState({
        tweets: currentTweets
      });
    });
  }

  figureTweet(tweet) {
    if( tweet.entities.media ) {
      return(
        <img src={ tweet.entities.media[0].media_url } className="defqon-feed-list-image" />
      )
    }
  }

  renderTweets(tweets) {
    return(
      <ul className="defqon-feed-list">
        {this.state.tweets.map((item, i) => {
          return (
            <li className="defqon-feed-list-item" key={i}>
              <h2 className="defqon-feed-list-profile">
                <img src={ item.user.profile_image_url } />
                <div className="defqon-feed-list-info">
                  {item.user.name} <span className="defqon-feed-list-username">@{item.user.screen_name}</span>
                </div>
              </h2>
              <p className="defqon-feed-list-tweet">{item.text}</p>
              {this.figureTweet(item)}
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return(
      <section className="defqon-feed">
        {this.renderTweets()}
      </section>
    )
  }
}
