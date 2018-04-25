import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

export default class extends Component {
  static displayName = 'Details'
  static propTypes = {
    match: PropTypes.shape(),
  }

  state = {
    card: {},
  }

  componentWillMount() {
    const { match } = this.props;
    axios.get(`https://api.pokemontcg.io/v1/cards/${match.params.id}`)
      .then((res) => {
        if (res.data.card) {
          this.setState({ card: res.data.card });
        }
      });
  }

  renderAttacks = () => {
    const { card: { attacks } } = this.state;

    if (!attacks || attacks.length === 0) {
      return null;
    }

    return attacks.map(
      (attack, index) => (<div style={{ fontSize: '20px', fontFamily: 'serif' }} key={index}>
        {attack.cost.map((single, index1) => (<i key={index1} className={`energy ${single.toLowerCase()}`} />))}
        {attack.name}|
        {attack.damage}
        <div style={{ fontSize: '16px', color: 'rgb(74, 74, 74)', paddingBottom: '10px' }}> {(attack.text) ? (attack.text) : (null)}</div>
      </div>
      ),
    );
  }

  renderAbility = () => {
    const { card: { ability } } = this.state;

    if (!ability) {
      return null;
    }

    return (<div className="abilityTypeClass">
      {ability.type}:
      <span className="abilityNameClass">{ability.name}</span>
    </div>
    );
  }

  renderWeaknesses = () => {
    const { card } = this.state;
    const weaknessDOM = [];

    if (card.weaknesses && card.weaknesses.length !== 0) {
      card.weaknesses.forEach((weakness, index) => {
        if (weakness.type) {
          weaknessDOM.push(
            <div key={index}>
              {(<i className={`energy ${weakness.type.toLowerCase()}`} />)}
              {weakness.value}
            </div>,
          );
        }
      });
    }
    if (weaknessDOM.length !== 0) return weaknessDOM;
    return null;
  }

  renderResistances = () => {
    const { card } = this.state;
    const resistanceDOM = [];

    if (card.resistances && card.resistances.length !== 0) {
      card.resistances.forEach((single, index) => {
        if (single.type) {
          resistanceDOM.push(
            <div key={index}>
              {(<i className={`energy ${single.type.toLowerCase()}`} />)}
              {single.value}
            </div>,
          );
        }
      });
    }
    if (resistanceDOM.length !== 0) return resistanceDOM;
    return 'N/A';
  }

  renderRetreatCost = () => {
    const { card } = this.state;
    if (!card.retreatCost || card.retreatCost === 0) {
      return null;
    }
    return card.retreatCost.map(
      (single, index) => (<i key={index} className={`energy ${single.toLowerCase()}`} />));
  }

  renderTypes = () => {
    const { card } = this.state;
    if (!card.types || card.types === 0) {
      return null;
    }
    return card.types.map(
      (single, index) => (<i key={index} className={`energy ${single.toLowerCase()}`} />));
  }

  render() {
    const { card } = this.state;

    return (
      <div>
        <Row className="flexibleContainer" >
          <Col className="firstCollClass" xs={24} sm={10}>
            <img src={card.imageUrl} alt={card.name} />
          </Col>
          <Col className="secondCollClass" xs={24} sm={14}>
            <Row>
              <Col className="cardNameClass" xs={8} sm={8}>
                <div >{card.name}  </div>
              </Col>
              <Col className="cardSupertypeClass" xs={8} sm={8}>
                {card.supertype} {card.subtype}
              </Col>
              <Col className="hpClass" xs={8} sm={8}>
                HP: {card.hp} {this.renderTypes()}
              </Col>
            </Row>
            <hr style={{ borderColor: 'dimgrey' }} />
            <Row>
              <div>{this.renderAbility()}</div>
            </Row>
            <Row >
              <div style={{ fontSize: '16px', color: 'rgb(74, 74, 74)' }}>
                {(card.ability && card.ability.text) ? card.ability.text : null}
              </div>
            </Row>
            <Row style={{ paddingTop: '10px', fontSize: '20px', fontFamily: 'serif' }}>
              {(card.text) ? ('RULES') : null}
            </Row>
            <Row style={{ fontSize: '16px', color: 'rgb(74, 74, 74)', paddingBottom: '10px' }}>
              {(card.text) ? (card.text) : null}
            </Row>
            <Row>
              <Col className="textAlignCenter" xs={8} sm={8}>
                <Row>
                  WEAKNESSES
                </Row>
                <Row className="serifFont">
                  {this.renderWeaknesses()}
                </Row>
              </Col>
              <Col className="textAlignCenter" xs={8} sm={8}>
                <Row>
                  RESISTANCE
                </Row>
                <Row className="serifFont2">
                  {this.renderResistances()}
                </Row>
              </Col>
              <Col className="textAlignCenter" xs={8} sm={8}>
                <Row>
                  RETREAT COST
                </Row>
                <Row className="serifFont">
                  {this.renderRetreatCost()}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="textAlignCenter" xs={8} sm={8}>
                <Row>
                  ARTIST
                </Row>
                <Row className="serifFont2">
                  {card.artist}
                </Row>
              </Col>
              <Col className="textAlignCenter" xs={8} sm={8}>
                <Row>
                  RARITY
                </Row>
                <Row className="serifFont2">
                  {(card.rarity) ? (card.rarity) : ('N/A')}
                </Row>
              </Col>
              <Col className="textAlignCenter" xs={8} sm={8}>
                <Row>
                  SET
                </Row>
                <Row className="serifFont2">
                  {card.set}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
