import classes from './nav.module.css'
import Nav from 'react-bootstrap/Nav';
const NavMenu = () => {
      return (
        <Nav className='justify-content-center'
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link className={classes['nav-color']} href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={classes['nav-color']} href="/news/">News</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  className={classes['nav-color']} eventKey="link-2">Sport</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={classes['nav-color']} eventKey="link-2">Work</Nav.Link>
          </Nav.Item>
        </Nav>
  );
};
export default NavMenu;
