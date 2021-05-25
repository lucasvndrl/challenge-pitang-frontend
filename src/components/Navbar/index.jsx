import { Navbar } from 'react-bootstrap';

function index() {
  return (
    <div>
      <Navbar bg='dark' variant='dark' data-testid='navbar-test'>
        <Navbar.Brand>Challenge Pitang</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default index;
