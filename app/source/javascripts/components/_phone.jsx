import React from 'react';
import classNames from 'classnames';

class PhoneComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      inputDDD: 'default',
      inputCellphone: 'default',
      warningMessage: ''
    });
  }

  validateDDDInput(event){
    const DDD = /^[0-9]{2}$/;
    let text = event.target.value;

    if (text.match(DDD) && text > 0 ){
      this.setState({inputDDD: 'valid'});
    } else {
      this.setState({inputDDD: 'invalid'});
    }
  }

  validateCellphoneInput(event){
    const CELLPHONE = /[0-9]{8}[0-9]?/;
    let text = event.target.value;

    if (text.match(CELLPHONE) ){
      this.setState({inputCellphone: 'valid'});
    } else {
      this.setState({inputCellphone: 'invalid'});
    }
  }

  toggleDDDClass(){
    let classesDDD = classNames({
      'nklck-phone--default': 'default', 
      'nklck-phone--valid': this.state.inputDDD === 'valid', 
      'nklck-phone--invalid' : this.state.inputDDD === 'invalid'
    });

    return classesDDD;
  }

  toggleCellphoneClass(){
    let classesCellphone = classNames({
      'nklck-phone--default': 'default', 
      'nklck-phone--valid': this.state.inputCellphone === 'valid', 
      'nklck-phone--invalid' : this.state.inputCellphone === 'invalid'
    });

    return classesCellphone;
  }

  render() {
    return(
      <section className="nklck-phone">
        <div className="">
        {this.displayName}
         <h3>Insira seu Número</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum reiciendis illo vitae, sunt ipsam consequatur est et commodi asperiores!</p>
         <form>
          <label>
            DDD
          <input type="tel" maxLength="2" placeholder="DDD" pattern="[0-9]{2}" name="ddd" className={this.toggleDDDClass()}  onChange={this.validateDDDInput.bind(this)} required/>
          </label>
          
          <label>
            Número de celular
          <input type="tel" maxLength="9" pattern="[0-9]{8}[0-9]?" name="cellphone" placeholder="Número de celular" className={this.toggleCellphoneClass()} onChange={this.validateCellphoneInput.bind(this)} required/>
          </label>
         </form>
        </div>
      </section>
    )
  }
}

export default PhoneComponent;
