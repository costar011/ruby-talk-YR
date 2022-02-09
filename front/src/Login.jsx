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

const LoginBox = styled.div`
  width: 80%;
  height: 90px;
  border-radius: 9.9px;
  box-shadow: 4px 4px 9px #999;
  margin-bottom: 100px;

  padding: 10px;
`;

const SignButton = styled(Button)`
  width: 80%;
  margin-bottom: 10px;
`;

const InputGuide = styled.span`
  font-size: 13px;
  color: #999;
`;

const InputEmail = styled.input`
  width: 100%;
  height: 25px;

  margin: 10px 0px;

  border: 1px solid #eee;
  border-radius: 7px;
  outline: none;
  background: none;

  padding: 0px 5px;

  box-shadow: 2px 2px 4px #999;
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

  const loginAction = async () => {
    if (email === "") {
      return message.error("이메일을 입력해주세요");
    }

    const result = await axios.post(
      "http://localhost:4000/api/user/emailCheck",
      {
        email,
      }
    );

    setStep(2);
  };

  const codeCheckAction = async () => {
    await localStorage.setItem("ruby_login", true);
    message.success("Welcom to RUBY TALK");
    navigate("/friend");
  };

  return (
    <Whole>
      <AppTitle>RUBY TALK</AppTitle>

      <SignButton type="primary">{step === 1 ? "SIGN IN" : "CHECK"}</SignButton>

      <SignButton type="primary">{step === 1 ? "SIGN UP" : "CHECK"}</SignButton>
    </Whole>
  );
};

export default Login;
