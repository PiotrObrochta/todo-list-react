import { FormWrapper, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <FormWrapper>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </FormWrapper>
);

export default Section;
