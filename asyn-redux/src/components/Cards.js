import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getCards } from "../actions";

const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 15%;
  margin: auto;
  img {
    width: 100%;
    marign: auto;
  }
`;

function Cards({ getCards, cards, isFetching, error }) {
  useEffect(() => {
    getCards();
  }, [getCards]);

  console.log(cards);

  if (isFetching) {
    return <h2>Fetching Pokemon card...</h2>;
  }

  return (
    <CardHolder>
      {cards.map(card => {
        return (
          <Card>
            <img src={card.imageUrlHiRes} />
          </Card>
        );
      })}
    </CardHolder>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getCards }
)(Cards);
