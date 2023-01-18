import { Fragment } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import classes from "./Home.module.css"
import Hero from "../header/Hero/Hero"
import Reels from "../Reels/Reels"
import NewsCategory from "../NewsCategory/NewsCategory"
import NewsSidebar from "../NewsCategory/NewsSidebar"
function Home() {
//   const GetNews=async()=>{
//     const GetNews=await (await fetch('http://localhost:4000/api/news')).json()
//     const sportnews=GetNews.filter((el)=>{
//       return el.category.title==='News'
//     })
//     console.log(sportnews)
//  }
//  GetNews()
  return (
    <Fragment>
      <Header />
      <main> 
        <Container className="pt-4 pb-4">
          <div className={classes["hero"]}>
            <Row>
              <Col>
                <h4 className={classes["welcome-heading"]}>
                  Welcome to BBC.com
                </h4>
              </Col>
              <Col>
                <h4
                  className={`${classes.text_right} ${classes.welcome_heading}`}
                >
                  Thursday, 12 January
                </h4>
              </Col>
            </Row>
            <Row>
              <Col sm={6} lg={6}>
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
              </Col>
              <Col sm={6} lg={6}>
                <Hero />
              </Col>
            </Row>
          </div>
          {/* News */}
          <NewsCategory cate={"news"} />
          {/* Sport */}
          <NewsCategory cate={"sport"} />
          {/* Features and Events */}
          <NewsCategory cate={"features-and-events"} />
        </Container>
        {/* Reels */}
        <Reels />
        <Container className="pt-4 pb-4">
          {/* Asia News */}
          <NewsCategory cate={"asia-news"} />
        </Container>
         <NewsSidebar/>
      </main> 

      <Footer />
    </Fragment>
  );
}

export default Home;
