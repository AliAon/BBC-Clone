import Row from "react-bootstrap/Row";
import HeroNews from "./Newscategory/HeroNews";
const Hero = () => {
  return (
    <Row className="gx-2 gy-2">
      <HeroNews catslug={'hero'}/>
    </Row>
  );
};
export default Hero;
