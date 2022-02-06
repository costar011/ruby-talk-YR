import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";

const ContentWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 60px);

  overflow: scroll;
`;

const NavWrapper = styled.section`
  width: 100%;
  height: 60px;
`;

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route exaxt path="/" element={<Login />} />
        </Routes>
        <ContentWrapper>
          <Routes></Routes>
        </ContentWrapper>
      </>
    );
  }
}

export default App;
