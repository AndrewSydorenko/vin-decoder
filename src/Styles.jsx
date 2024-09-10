import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  @media screen and (min-width: ("480px")) {
    flex-direction: column;
  }

  > nav {
    display: flex;
  }
  h1 {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 50px;
    color: #118dc7;
    text-align: center;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  height: 30px;

  input {
    padding: 10px;

    background-color: aliceblue;
    border: 1px solid #118dc7;
    border-radius: 3px;
    color: #118dc7;
    @media screen and (min-width: "480px") {
      width: 250px;
    }
    &:focus-visible {
      outline: none;
      border: 1px solid #11c78a;
    }
  }
`;

export const History = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 10px;
  align-items: center;
  h3 {
    font-weight: 400;
  }
  & ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const VariablesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;

  th,
  td {
    display: flex;
    justify-content: center;
  }
`;
export const VariableDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;

  th {
    display: flex;
    justify-content: center;
  }
`;
