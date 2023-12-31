import React from 'react';
import PropTypes from 'prop-types';
import '../form.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    /*  const { onInputChange } = this.props; */
    /*  const { state :{name, descricao, Attr1, Attr2, Attr3, image, raridade, trunfo } } = this.props;
    O estado não está sendo 'importado desta forma, mas sim, atrvés das props. Essa sacada eu demorei para pegar, tive que ver umas PRs'
    Hoje com mais experiência vejo que dessa forma nunca iria pegar mesmo porque o estado vem por props, sendo pego por this.props e não this.props.state. Sim, eu estava aprendendo kkkk
    */
    return (
      <div className="box-form">
        <form className="form">
          <div className="input-box">
            <label htmlFor="name">
              Nome:
              <input
                type="text"
                data-testid="name-input"
                id="name"
                value={ cardName }
                onChange={ onInputChange }
                name="name"
              />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="descricao">
              Descrição:
              <textarea
                type="textarea"
                data-testid="description-input"
                id="descricao"
                value={ cardDescription }
                onChange={ onInputChange }
                name="descricao"
              />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="Attr01">
              Attr01:
              <input
                type="number"
                max={ 90 }
                min={ 0 }
                data-testid="attr1-input"
                id="Attr01"
                value={ cardAttr1 }
                onChange={ onInputChange }
                name="Attr01"
              />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="Attr02">
              Attr02:
              <input
                type="number"
                max={ 90 }
                min={ 0 }
                data-testid="attr2-input"
                id="Attr02"
                value={ cardAttr2 }
                onChange={ onInputChange }
                name="Attr02"
              />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="Attr03">
              Attr03:
              <input
                type="number"
                max={ 90 }
                min={ 0 }
                data-testid="attr3-input"
                id="Attr03"
                value={ cardAttr3 }
                onChange={ onInputChange }
                name="Attr03"
              />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="image">
              Imagem:
              <input
                type="text"
                data-testid="image-input"
                id="image"
                value={ cardImage }
                onChange={ onInputChange }
                name="image"
              />
            </label>
          </div>
          <div className="input-box">

            Raridade:
            <select
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="raridade"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>

          </div>
          <div className="input-box">
            <label htmlFor="trunfo">
              {
                hasTrunfo ? (
                  <p>Você já tem um Super Trunfo em seu baralho</p>
                ) : (
                  <label htmlFor="checkbox" className="checkbox">
                    Escolher como Trunfo
                    <input
                      type="checkbox"
                      id="trunfo"
                      data-testid="trunfo-input"
                      checked={ cardTrunfo }
                      onChange={ onInputChange }
                      name="trunfo"
                    />
                  </label>
                )
              }
            </label>
          </div>
          <div>
            <button
              type="submit"
              id="button"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

/*
Requisito 1 -
Criação normal de um formulário, porém atenção aos data-testid para os tests
Processo similar ao exercícios proposto no dia.
nome, descrição, 3 atributos, image, raridade, trunfo, um btn p salvar.
*/

/*
Requisito 2 -
1 - Cada input vai ter um value para ser exibido na tela
2 - Um evento para poder controlar o campo de cada input
*/
