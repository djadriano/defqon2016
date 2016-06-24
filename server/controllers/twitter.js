import appConfig from '../helpers/config';
import Twtr   from 'twitter';

class Twitter {
  constructor( io, socket ) {
    this.Tweet = new Twtr({
      consumer_key       : appConfig.twitter.consumer_key,
      consumer_secret    : appConfig.twitter.consumer_secret,
      access_token_key   : appConfig.twitter.access_token_key,
      access_token_secret: appConfig.twitter.access_token_secret
    });

    this.io = io;
    this.socket = socket;
  }

  subscribeStream() {
    this.Tweet.stream('statuses/filter', {track: 'twitter'}, (stream) => {
      stream.on('data', (tweet) => {
        this.io.emit('hasNewContents', { tweets: tweet.text });
      });

      stream.on('error', (error) => {
        console.log(error);
        this.io.emit('hasNewContents', { tweets: error });
      });
    });
  }

  getTweets() {
    this.Tweet.get('search/tweets', {q: 'hardstyle'}, (error, tweets, response) => {
      this.io.in( this.socket.id ).emit('getFeedFirstTime', {
        tweets: tweets.statuses
      });
    });
  }
}

export default Twitter;