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

const InputGuide = styled.span`
  font-size: 13px;
  color: #999;
`;

const SignButton = styled(Button)`
  width: 80%;
  margin-bottom: 10px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const flag = localStorage.getItem("ruby_login");

    if (flag === "true") {
      navigate("/friend");
    } else {
      return;
    }
  }, []);

  const onChangeInput = (event) => {
    setEmail(event.target.value);
  };

  const onChangeCode = (event) => {
    setCode(event.target.value);
  };

  const codeCheckAction = async () => {
    await localStorage.setItem("ruby_login", true);
    message.success("Welcom to RUBY TALK");
    navigate("/friend");
  };

  class Login extends React.Component {
    render() {
      return (
        <Whole>
          <AppTitle>RUBY TALK</AppTitle>
        </Whole>
      );
    }
  }
};

export default Login;
