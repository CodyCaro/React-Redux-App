import React from "react";
import { connect } from "react-redux";

function Cards() {
  return (
    <div className="Cards">
      <header className="Cards-header"></header>
    </div>
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
  {}
)(Cards);
