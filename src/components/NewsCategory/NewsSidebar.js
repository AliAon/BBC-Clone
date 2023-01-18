import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsCategory from "./NewsCategory"
import classes from "./NewsCategory.module.css";


const NewsSidebar=()=>{
    return (
        <Container className="pt-4 pb-4">
        <Row>
          <Row>
            <Row className="pb-2">
              <h3 className={classes["cat-title"]}>Editor’s Picks</h3>
              <hr className={classes["title-hr"]} />
            </Row>
          </Row>
          <Col lg={8}>
             <div className={classes["news-item"]}>
                <img
                  className={classes.img}
                  src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/126C3/production/_128295457_mediaitem128295456.jpg"
                />
                <div className={classes.overlay}></div>
                <h2 className={classes["hero__news-title"]}>
                  Iran executes British-Iranian national Akbari
                </h2>
                <span className={classes["hero__summeray"]}>
                  Former Iranian minister Alireza Akbari was arrested in 2019
                  and convicted of spying for the UK.
                </span>
                <span className={classes["hero__tag--news"]}>
                  Middle East
                </span>
              </div>
              <Row>
                 <NewsCategory cate={"sport"} />
              </Row>
          </Col>
          <Col lg={4}>
            <div className="sidebar">
              <h4 className={classes["side-nav-header"]}>LATEST BUSINESS NEWS</h4>
              <div className={classes["posts-list"]}>
                <div className={classes["side-post-card"]}>
                    <Row className="gx-6">
                         <Col lg={2}>
                           <p className={classes["circle-post"]}>1</p>
                        </Col>
                        <Col lg={10}>
                           <h5 className={classes["side-post-title"]}>Energy boss warns higher bills are here to stay</h5>
                        </Col>
                    </Row>
                </div>
                <div className={classes["side-post-card"]}>
                     <Row className="gx-6">
                         <Col lg={2}>
                           <p className={classes["circle-post"]}>2</p>
                        </Col>
                        <Col lg={10}>
                           <h5 className={classes["side-post-title"]}>Energy boss warns higher bills are here to stay</h5>
                        </Col>
                    </Row>
                </div>
                <div className={classes["side-post-card"]}>
                     <Row className="gx-6">
                         <Col lg={2}>
                           <p className={classes["circle-post"]}>3</p>
                        </Col>
                        <Col lg={10}>
                           <h5 className={classes["side-post-title"]}>Energy boss warns higher bills are here to stay</h5>
                        </Col>
                    </Row>
                </div>
                <div className={classes["side-post-card"]}>
                     <Row className="gx-6">
                         <Col lg={2}>
                           <p className={classes["circle-post"]}>4</p>
                        </Col>
                        <Col lg={10}>
                           <h5 className={classes["side-post-title"]}>Energy boss warns higher bills are here to stay</h5>
                        </Col>
                    </Row>
                </div>
                <div className={classes["side-post-card"]}>
                     <Row className="gx-6">
                         <Col lg={2}>
                           <p className={classes["circle-post"]}>5</p>
                        </Col>
                        <Col lg={10}>
                           <h5 className={classes["side-post-title"]}>Energy boss warns higher bills are here to stay</h5>
                        </Col>
                    </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )

}
export default NewsSidebar