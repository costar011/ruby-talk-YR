import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const Login = () => {
  return (
    <Whole>
      <AppTitle>RUBY TALK</AppTitle>
    </Whole>
  );
};

export default Login;
