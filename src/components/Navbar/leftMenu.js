import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import Brand from "../../Images/brand.png";
const Leftmenu = () => {
  return (
    <>
      <div style={{ display: "flex", width: "256px" }}>
        <ImageContainer>
          <ImageDiv src={Brand}></ImageDiv>
        </ImageContainer>
        <BrandName>AZURE CLOUD</BrandName>
      </div>
      <InputDiv>
        <Input
          size="large"
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </InputDiv>
    </>
  );
};

const ImageContainer = styled.div`
  margin: 5px;
`;

const ImageDiv = styled.img`
  height: 30px;
  width: 50px;
`;

const InputDiv = styled.div`
  margin: 3px 33.7em 3px 0;
  span {
    border: none;
    border-radius: 0;
    background-color: black;
    color: gray;
  }

  input {
    margin-left: 4px;
    background-color: black;
    ::placeholder {
      color: gray;
      opacity: 1;
    }
  }
`;

const BrandName = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  color: white;
  margin-top: 15px;
`;

export default Leftmenu;
