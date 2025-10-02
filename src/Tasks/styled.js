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
    border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};

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
    color: ${({ theme }) => theme.color.teal};
    width: 30px;
    height: 30px;
    padding: 0px;
    transition: 0.4s;
    cursor: pointer

    ${({ $toggleDone, theme}) => $toggleDone && css`
      background: ${theme.color.green};

        &:hover {
        background: ${theme.color.greenHover};
      }

       &:active {
        background: ${theme.color.greenActive};
    }
    `}

    ${({ $remove, theme }) => $remove && css`
        background: ${theme.color.redRemove};

      &:hover {
      background: ${theme.color.redRemoveHover};
    }

      &:active {
      background: ${theme.color.redRemoveActive};
    }
  `}
`;
