import React from "react";
import styled from "styled-components";
import Cards from "./components/Cards";
import background from "./1.jpg";

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  background-image: url(${background});
`;

const H1 = styled.h1`
  text-align: center;
  padding: 25px 0;
  margin: 0;
  color: white;
`;

function App() {
  return (
    <Container>
      <H1>CHECK OUT MY RAD POKEMON COLLECTION!</H1>
      <Cards></Cards>
    </Container>
  );
}

export default App;
