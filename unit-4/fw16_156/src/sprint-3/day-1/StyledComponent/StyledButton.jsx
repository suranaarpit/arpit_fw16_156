import React from "react";
import { StyledButton } from "./App.styled.js";

const SButton = () => {
  return (
    <>
      <StyledButton
        color={"#fff"}
        bgColor={"#2490FE"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
        cursor = {"pointer"}
      >
        Primary Button
      </StyledButton>
      <StyledButton
        color={"black"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"solid"}
        margin={"10px 4px"}
        cursor = {"pointer"}
      >
        Default Button
      </StyledButton>
      <StyledButton
        color={"#111"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"dashed"}
        margin={"10px 4px"}
        cursor = {"pointer"}
      >
        Dashed Button
      </StyledButton>
      <StyledButton
        color={"#111"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
        cursor = {"pointer"}
      >
        Text Button
      </StyledButton>
      <StyledButton
        color={"#2490FE"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
        cursor = {"pointer"}
      >
        Link Button
      </StyledButton>
    </>
  );
};

export default SButton;
