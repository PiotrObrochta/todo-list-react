import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 0px;
    margin: 0px;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0px;
    transition: 0.4s;
    cursor: pointer

    ${({toggleDone}) => toggleDone && css`
      background: hsl(122, 65%, 29%);

      &:hover {
        background: hsl(122, 65%, 35%);
      }

      &:active {
        background: hsl(122, 65%, 40%);
    }
    `}

    ${({ remove}) => remove && css`
    ;

    &:hover {
      background: hsl(354, 84%, 60%);
    }

    &:active {
      background: hsl(354, 84%, 60%);
    }
  `}
`;
