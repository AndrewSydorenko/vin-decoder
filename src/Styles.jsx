import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;

  .vinSearch_title {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 50px;
    color: #118dc7;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  height: 30px;

  .vinSearch_input {
    padding: 10px;
    width: 250px;
    background-color: aliceblue;
    border: 1px solid #118dc7;
    border-radius: 3px;
    color: #118dc7;
    &:focus-visible {
      outline: none;
      border: 1px solid #11c78a;
    }
  }
  .vinSearch_submit {
    border: 1px solid #118dc7;
    display: flex;
    align-items: center;
    font-weight: 700;
    border: none;
    background-color: aliceblue;
    color: #118dc7;
    border-radius: 3px;
    &:hover {
      color: aliceblue;
      background-color: #118dc7;
    }
  }
`;

export const History = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 10px;
  align-items: center;
  & ul {
    display: flex;
    gap: 20px;
  }
`;

export const Results = styled.div`
  display: flex;
  & ul {
    display: flex;
    flex-direction: column;
    & li {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
`;

export const VariablesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  th,
  td {
    display: flex;
    justify-content: center;
    border: 1px solid rgb(160 160 160);
  }
`;
