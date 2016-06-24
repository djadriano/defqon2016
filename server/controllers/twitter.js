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
    this.Tweet.stream('statuses/filter', { track: 'Defqon1, dq1, dq16' }, (stream) => {
      stream.on('data', (tweet) => {
        this.io.emit('hasNewContents', { tweets: tweet });
      });

      stream.on('error', (error) => {
        console.log(error);
      });
    });
  }

  getTweets() {
    this.Tweet.get('search/tweets', { q: 'Defqon1' }, (error, tweets, response) => {
      this.io.in( this.socket.id ).emit('getFeedFirstTime', {
        tweets: tweets.statuses
      });

      this.subscribeStream();
    });
  }
}

export default Twitter;
