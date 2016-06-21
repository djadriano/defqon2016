import React from 'react';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Video';
    }
    render() {
        return(
          <section className="nklck-video">
            <p>Video</p>
          </section>
        ) 
    }
}

export default Video;
