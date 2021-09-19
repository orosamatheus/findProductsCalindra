import { useState } from 'react';
import {
  Container,
  SearchBarContainer,
  SuggestionsContainer,
  ProductContainer,
} from './styles';

export default function Home() {
  const [query, setQuery] = useState('');
  const [listProducts, setListProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  function getProducts(q) {
    const data = fetch(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${q}&source=nanook`);
    data.then((response) => response.json()
      .then((productsObject) => {
        setListProducts(productsObject.products);
        setSuggestions(productsObject.suggestions);
      }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    getProducts(query);
  }

  function handleClickSuggestion(e, term) {
    e.preventDefault();
    setQuery(term);
    getProducts(term);
  }

  return (
    <Container>
      <SearchBarContainer onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for your products"
        />
        <button type="submit">
          Search!
        </button>
      </SearchBarContainer>
      <SuggestionsContainer active={suggestions.length !== 0}>
        <span>Você quis dizer:</span>
        { suggestions.map((suggestion) => (
          <span onClick={(e) => handleClickSuggestion(e, suggestion.term)} aria-hidden="true">
            <h5>{suggestion.term}</h5>
          </span>
        ))}
      </SuggestionsContainer>
      <ProductContainer>
        {
          listProducts.map((product) => (
            <li key={product.id}>
              <h4>{product.name}</h4>
            </li>
          ))
        }
      </ProductContainer>
    </Container>
  );
}
