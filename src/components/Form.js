import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Crie uma nova Carta</legend>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              id="name"
              name="name"
              type="text"
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              data-testid="description-input"
              id="description"
              name="description"
              type="text"
            />
          </label>

          <label htmlFor="attr1">
            Força
            <input
              data-testid="attr1-input"
              id="attr1"
              name="attr1"
              type="number"
            />
          </label>

          <label htmlFor="attr2">
            Coragem
            <input
              data-testid="attr2-input"
              id="attr2"
              name="attr2"
              type="number"
            />
          </label>

          <label htmlFor="attr3">
            Velocidade
            <input
              data-testid="attr3-input"
              id="attr3"
              name="attr3"
              type="number"
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              id="image"
              name="image"
              type="text"
            />
          </label>

          <label htmlFor="rarity">
            Raridade da carta
            <select
              data-testid="rare-input"
              id="rarity"
              name="rarity"
              type="select"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="super">
            Carta Super Trunfo
            <input
              data-testid="trunfo-input"
              id="super"
              name="super"
              type="checkbox"
            />
          </label>

          <button
            data-testid="save-button"
            id="save-button"
            name="save-button"
            type="checkbox"
          >
            Salvar

          </button>

          /

        </fieldset>
      </form>

    );
  }
}

export default Form;
