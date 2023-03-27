import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import {
  SettingOutlined,
  NotificationOutlined,
  MessageOutlined,
} from "@ant-design/icons";
const RightMenu = () => {
  return (
    <div
      style={{
        display: "flex",
        minWidth: "28%",
        marginRight: "15px",
        marginTop: "5.5px",
        justifyContent: "space-between",
      }}
    >
      <IconDiv>
        <SettingOutlined
          style={{ color: "white", marginRight: "20px", cursor: "pointer" }}
        />
        <NotificationOutlined
          style={{ color: "white", marginRight: "20px", cursor: "pointer" }}
        />
        <MessageOutlined style={{ color: "white", cursor: "pointer" }} />
      </IconDiv>

      <LogoutButton>
        <Button type="primary" style={{}}>
          LOGOUT
        </Button>
      </LogoutButton>
      <ProfileContainer style={{ display: "flex" }}>

        <ProfileDiv src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0"></ProfileDiv>
        <div>
          <div style={{ color: "white" }}>Rachel Green</div>
          <span style={{ color: "gray" }}>rachelgreen@gmail.com</span>
        </div>
      </ProfileContainer>
    </div>
  );
};

const IconDiv = styled.div`
  margin-top: 8px;
`;
const LogoutButton = styled.div``;
const ProfileContainer = styled.div``;
const ProfileDiv = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 100px;
  margin-right: 5px;
`;

export default RightMenu;
