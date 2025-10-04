import styled from "styled-components";

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 3.2px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

export const FormWrapper = styled.section`
  margin: 10px 0;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.borderGray};
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  padding: 20px;
`;

export const Body = styled.div`
  padding: 20px;
`;