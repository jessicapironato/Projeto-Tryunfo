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
    // this.onSaveButtonClick = this.onSaveButtonClicke.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  // onSaveButtonClick({ target }) {
  //   const { name, value } = target;

  //   this.setState((previousState) => ({
  //     ...previousState,
  //     [name]: value,
  //   }));
  // }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
