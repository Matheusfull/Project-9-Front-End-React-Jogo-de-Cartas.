import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
      excluir,
      onDeleteButtonClick,
    } = this.props;
    return (
      <div className="box_card">
        <div className="card">
          <div className="card_name">
            <h1 data-testid="name-card">{cardName}</h1>
          </div>
          <div className="card_persona">
            <div>
              <img data-testid="image-card" src={ cardImage } alt={ cardName } />
            </div>
            <div>
              <p data-testid="description-card">{cardDescription}</p>
            </div>
          </div>
          <div className="card_attr">
            <h3 data-testid="attr1-card">{cardAttr1}</h3>
            <h3 data-testid="attr2-card">{cardAttr2}</h3>
            <h3 data-testid="attr3-card">{cardAttr3}</h3>
            <h3 data-testid="rare-card">{cardRare}</h3>
          </div>
          <div className="card_trunfo">
            {
              cardTrunfo && <h2 data-testid="trunfo-card">Super Trunfo</h2>
            }
          </div>
          <div className="card_btn">
            {excluir && (
              <button
                data-testid="delete-button"
                onClick={ () => onDeleteButtonClick(cardName, cardTrunfo) }
                type="button"
              >
                Excluir
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  excluir: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Card;

/*
Requisito 3 -
Pega as props, pois estão com os valores dos inputs.
Renderize-as, com isso será exposto a carta criada.
*/
