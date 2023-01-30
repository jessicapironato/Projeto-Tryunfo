import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.textFilled = this.textFilled.bind(this);
    this.numberFilled = this.numberFilled.bind(this);
    this.buttonVerify = this.buttonVerify.bind(this);

    // this.onSaveButtonClick = this.onSaveButtonClicke.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.buttonVerify);
  }

  // questão 5 : ver
  textFilled = () => {
    const { cardImage, cardName, cardDescription, cardRare } = this.state;

    return (cardImage === '' || cardName === ''
      || cardDescription === '' || cardRare === '');
  };

  numberFilled = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const sum = 210;
    const max = 90;
    const min = 0;
    const card1 = parseInt(cardAttr1, 10);
    const card2 = parseInt(cardAttr2, 10);
    const card3 = parseInt(cardAttr3, 10);

    return ((card1 + card2 + card3 > sum)
    || (card1 > max || card2 > max || card3 > max)
    || (card1 < min || card2 < min || card3 < min));
  };

  buttonVerify = () => {
    const text = this.textFilled();
    const number = this.numberFilled();
    if (text === true || number === true) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  };

  // onSaveButtonClick({ target }) {
  //   const { name, value } = target;

  //   this.setState((previousState) => ({
  //     ...previousState,
  //     [name]: value,
  //   }));
  // }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }

        />
      </div>
    );
  }
}

export default App;
