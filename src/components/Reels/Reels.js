import classes from "./Reels.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReelItem from "./ReelsItem/ReelItem";
import { Container } from "react-bootstrap";
import ReelData from "../data/ReelsData.json";
const DataReel = ReelData;
const Reels = () => {

  const ReelsList = DataReel?.map((item) => {
    return(
       <Col lg={4} sm={6} className="mb-4">
        <ReelItem title={item.title} image={item.image}/>
      </Col>
    )
      
  });
  return (
    <Container fluid={true} className={classes["reels-background"]}>
     <Container>
      <Row className="pt-4 pb-4">
        <Row>
          <Col>
            <h2 className={classes["reels__reels-title"]}>Reel</h2>
            <p className={classes["reels__reels-subtitle"]}>
              The most amazing videos from the BBC
            </p>
          </Col>
          <Col>
            <div className={classes["visit-btn-container"]}>
              <button className={classes["reels__Visit-reels-btn"]}>
                Visit Reel
              </button>
            </div>
          </Col>
        </Row>
        <Row>
            {ReelsList}
        </Row>
      </Row>
    </Container>
  </Container>
  );
};

export default Reels;
