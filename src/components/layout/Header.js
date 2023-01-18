import { Fragment } from "react";
import Logo from "../header/Logo";
import classes from "./Header.module.css";
import NavMenu from "../header/Nav";
import Search from "../header/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
         <Row className="align-items-center">
           <Col sm={6} lg={2}>
             <Logo />
           </Col>
           <Col sm={6} lg={6}>
             <NavMenu />
           </Col>
           <Col sm={6} lg={3} className="pt-3">
             <Search />
           </Col>
           <Col sm={6} lg={1} className="text-center">
            <Link to="#" className={classes["signin-link"]}>SignIn</Link>
           </Col>
         </Row>
      </Container>
    </header>
  );
};
export default Header;
