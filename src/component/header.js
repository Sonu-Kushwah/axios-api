import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Axios API Fetch</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;