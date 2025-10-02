import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    transition: color 0.3s;
    margin: 0 0 0 20px;
    cursor: pointer;

  &:hover {
        color: ${({ theme }) => theme.color.tealHover};
  } 

  &:active {
        color: ${({ theme }) => theme.color.tealActive};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-basis: 100%;
    margin: 10px;
  }
`;