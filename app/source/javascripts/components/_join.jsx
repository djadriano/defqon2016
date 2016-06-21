import React from 'react';

export default class JoinComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="nklck-join">
        <h2 className="nklck-join-title u-t-tradegothic-medium title">Supere seus limites</h2>
        <p>
          As Olimpíadas desse ano lorem ipsum dolor, e você terá ainda mais motivos pra se mover.<br />
          Cadastre-se e participe lorem ipsum dolor sit.
        </p>
        <a href="#" className="u-button u-bg-black u-c-white">Participe</a>
      </section>
    )
  }
}
