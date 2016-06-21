import React from 'react';

export default class DownloadComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="nklck-download">
        <div className="nklck-download-container">
          <div className="nklck-download-items">
            <h2>Nike+ Run Club</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <a href="">Baixe o app</a>
          </div>

          <div className="nklck-download-items">
            <h2>Nike+ Training Club</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <a href="">Baixe o app</a>
          </div>

        </div>
      </section>
    )
  }
}
