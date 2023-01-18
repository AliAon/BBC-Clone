import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row className="pt-2 pb-2">
          <Col>
            <h5>Explore the BBC</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className={classes["footer__links"]}>
              <li>Home</li>
              <li>Future</li>
            </ul>
          </Col>
          <Col>
            <ul className={classes["footer__links"]}>
              <li>News</li>
              <li>Culture</li>
            </ul>
          </Col>
          <Col>
            <ul className={classes["footer__links"]}>
              <li>Sport</li>
              <li>Tv</li>
            </ul>
          </Col>
          <Col>
            <ul className={classes["footer__links"]}>
              <li>Reel</li>
              <li>Weather</li>
            </ul>
          </Col>
          <Col>
            <ul className={classes["footer__links"]}>
              <li>Work Life</li>
              <li>Sounds</li>
            </ul>
          </Col>
          <Col>
            <ul className={classes["footer__links"]}>
              <li>Travel</li>
            </ul>
          </Col>
        </Row>
        <hr/>
        <Row>
          <ul className={classes.footer__legal_links}>
            <li>Terms of Use</li>
            <li>About the BBC</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>Accessibility Help</li>
            <li>Parental Guidance</li>
            <li>Contact the BBC</li>
            <li>BBC emails for you</li>
          </ul>
        </Row>
        <Row className="pt-3">
          <p className={classes.footer__copyright_text}>
            Copyright © 2023 BBC. The BBC is not responsible for the content of
            external sites. Read about our approach to external linking.
          </p>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
