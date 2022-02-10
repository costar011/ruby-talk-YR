import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import Friend from "./Friend";
import BottomNav from "./BottomNav";

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
          <Routes>
            <Route exaxt path="/friend" element={<Friend />} />
          </Routes>
        </ContentWrapper>

        <NavWrapper>
          <Routes>
            <Route exaxt path="/friend" element={<BottomNav />} />
          </Routes>
        </NavWrapper>
      </>
    );
  }
}

export default App;
