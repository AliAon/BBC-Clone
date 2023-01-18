import classes from "./NewsCategory.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsData from "../data/NewsData.json";
import NewsItem from "./NewsItem/NewsItem";
const DataNews = NewsData;
const NewsCategory = (props) => {
  const FilterCategory=DataNews.filter((cat)=>{
    return cat.cate_slug===props.cate
  })
  const NewsData=FilterCategory['0'].data
  const CategoryTitle=FilterCategory['0'].title

  const NewsList = NewsData?.map((item) => {
    return (
      <Col lg={4} sm={6} className="mb-4">
        <NewsItem title={item.title} exerpt={item.exerpt} tag={item.tag} image={item.image} id={item.id}/>
      </Col>
    );
  });
  return (
    <section className={classes["cate-section"]}>
      <Row>
        <Row className="pb-2">
          <h3 className={classes["cat-title"]}>{CategoryTitle}</h3>
          <hr className={classes["title-hr"]} />
        </Row>
            {NewsList}
      </Row>
    </section>
  );
};

export default NewsCategory;
