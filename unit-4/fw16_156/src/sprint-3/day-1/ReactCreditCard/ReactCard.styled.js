import styled from "styled-components";

export const FormDiv = styled.div`
  /*margin: auto;*/
  margin-bottom: 100px;
  text-align: center;
  width: 80%;
  padding: 50px;
  color: yellow;
  box-sizing: border-box;
`;

export const ButtonNew = styled.button`
  background-color: crimson;
  color: white;
  border-radius: 10px;
  width: 50%;
  height: 30px;
`;

export const InputNew = styled.input`
  width: 80%;
  height: 20px;
  background: white;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 5px;
`;

export const Maindiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 50px;
`;

export const CardDiv = styled.div`
  border: 2px solid gray;
  width: 50%;
  height: fit-content;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  background-color: crimson;
  margin-top: 50px;
  border-radius: 15px;  
`;
