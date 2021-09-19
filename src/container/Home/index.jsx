import {
  Container,
  SearchBarContainer,
  ProductContainer,
} from './styles';

export default function Home() {
  return (
    <Container>
      <SearchBarContainer>
        <input type="text" />
        <button type="submit">
          Search!
        </button>
      </SearchBarContainer>
      <ProductContainer>
        <li> teste</li>
      </ProductContainer>
    </Container>
  );
}
