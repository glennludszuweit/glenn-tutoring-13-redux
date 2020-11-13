import { Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg='success' variant='dark'>
      <Navbar.Brand className='mr-auto'>Redux</Navbar.Brand>
      <Nav className='ml-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/posts'>Posts</Nav.Link>
        <Nav.Link href='/users'>Users</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
