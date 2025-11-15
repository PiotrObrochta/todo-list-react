import { Container } from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Piotr Obrochta"
      body={
        <>
          Mieszkam we Wrocławiu, jestem po szkole poligraficznej i ukończyłem ją
          jako <strong>Grafik Komputerowy</strong>, mimo wszystko że pracuję w
          drukarni to nie zajmuję stanowiska przy komputerze :) pracuję jako
          operator falcerki, składam ulotki, składki do książek itp. Zajmuję sie
          obsługą maszyn <strong>postpress</strong>
        </>
      }
    />
  </Container>
);

export default Author;
