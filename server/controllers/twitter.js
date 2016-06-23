import appConfig from '../helpers/config';
import Twtr   from 'twitter';

class Twitter {
  constructor() {
    this.Tweet = new Twtr({
      consumer_key       : appConfig.twitter.consumer_key,
      consumer_secret    : appConfig.twitter.consumer_secret,
      access_token_key   : appConfig.twitter.access_token_key,
      access_token_secret: appConfig.twitter.access_token_secret
    });

    console.log('Twitter initialize');
  }

  getTweets( io, socket ) {
    this.Tweet.stream('statuses/filter', { track: 'defqon1, qdance' }, ( stream ) => {
      stream.on('data', ( tweet ) => {
        console.log('hardstyle');
        console.log(tweet.id);
        console.log(tweet.user.screen_name);
        console.log(tweet.text);
      });

      stream.on('error', ( error ) => {
        throw error;
      });
    });
  }
}

export default Twitter;
