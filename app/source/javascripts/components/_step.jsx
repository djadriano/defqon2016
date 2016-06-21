import React from 'react';

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Step';
  }
  render() {
    return (
      <section className="nklck-step">
        <div className="nklck-step-container u-pb-40 u-pt-40 u-pl-20 u-pr-20">
          <h2 className="nklck-step-container-title">Saiba como participar</h2>

            <div className="nklck-step-info">
              <div className="nklck-step-info-container">
                <h3>Nike Logo</h3>
                <img src="" />
                <p>Clique em "participe" e lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>

              <div className="nklck-step-info-container ">
                <h3>Cellphone Logo</h3>
                <img src="" />
                <p>Cadastre seu celular e lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>

              <div className="nklck-step-info-container">
                <h3>Runners Logo</h3>
                <img src="" />
                  <p>Corra e treine e lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
            </div>
        </div>
      </section>
      ) 
    }
}

export default Step;
