import React, { useEffect } from "react";
import TopNav from "./TopNav";
import { loginCheck } from "./middlewares";
import { useNavigate } from "react-router-dom";
import FriendBox from "./components/FriendBox";

const Friend = () => {
  const navigate = useNavigate;

  useEffect(() => {
    const loginFlag = loginCheck();

    console.log(loginFlag);

    if (!loginFlag) {
      // 메인화면으로
      navigate("/");
    }
  }, []); //componentDidMount
  return (
    <div>
      <TopNav title="Friend" desc="친구 목록을 확인 할 수 있습니다" />

      <FriendBox />
      <FriendBox />
    </div>
  );
};

export default Friend;
