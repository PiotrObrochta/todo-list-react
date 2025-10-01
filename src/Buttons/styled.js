import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    color: teal;
    background-color: transparent;
    transition: color 0.3s;
    margin: 0 0 0 20px;
    cursor: pointer;

  &:hover {
        color: hsl(180, 100%, 35%);
  }

  &:active {
        color: hsl(180, 100%, 42%);
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;