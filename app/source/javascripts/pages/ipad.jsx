import React from 'react';
import axios from 'axios';
import Q from 'q';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      products: ['434010', '443266', '440696'],
      user    : {
        name: 'Luiz Doidão',
        email: 'luiz.bacelar@rga.com'
      },
      loading: false
    });
  }

  Buy() {
    let promises = [];

    this.setState({
      loading: true
    });

    {
      this.state.products.map((item, i) => {

        let deferred = Q.defer();

        var iframe = document.createElement('iframe');

        iframe.onload = () => {
          deferred.resolve();
        };

        iframe.src = `http://shop.nike.com.br/Site/Carrinho.aspx?idSku=${item}`;
        document.body.appendChild(iframe);

        promises.push(deferred.promise);

      });
    }

    Q.all(promises).then((data) => {
      console.log('promises loaded');
      window.location = 'http://shop.nike.com.br/Site/Carrinho.aspx';

      this.setState({
        loading: false
      });
    });

  }

  loading() {
    if(this.state.loading) {
      return <h1>Loading...</h1>;
    }
  }

  listProducts() {
    return(
      <div>
        <ul>
          {
            this.state.products.map((item, i) => {
              return <li key={i}>Produto id: {item}</li>
            })
          }
        </ul>
        <button onClick={this.Buy.bind(this)}>Finalizar Compra</button>
      </div>
    )
  }

  render() {
    return(
      <section className="nklck-ipad">
        <h2 className="nklck-ipad-title">Ipad</h2>
        <p>
          <b>Usuário:</b> {this.state.user.name}<br />
          <b>E-mail:</b> {this.state.user.email}
        </p>
        {this.loading()}
        {this.listProducts()}
      </section>
    )
  }
}
