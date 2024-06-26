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