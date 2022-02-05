import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Whole = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AppTitle = styled.h2`
  margin-bottom: 100px;
`;

class Login extends React.Component {
  render() {
    return <h1> login </h1>;
  }
}

export default Login;
