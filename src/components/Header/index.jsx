import {
  Container,
  Center,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Center>
        <a href="/">
          <div className="text">
            Find products
          </div>
        </a>
      </Center>
    </Container>
  );
}
