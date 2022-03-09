import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route exaxt path="/" element={<Login />} />
        </Routes>
      </>
    );
  }
}

export default App;
