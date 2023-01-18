import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsData from "../../../data/NewsData.json";
import NewsItem from "./NewsItem";
const DataNews = NewsData;
const HeroNews = (props) => {
  const FilterCategory=DataNews.filter((cat)=>{
    return(cat.cate_slug==props.catslug) 
  })
  const NewsData=FilterCategory['0'].data
  const NewsList = NewsData?.map((item) => {
    return (
    
       <Col sm={6} lg={6}>
              <NewsItem title={item.title}  tag={item.tag} image={item.image}/>
       </Col>
    );
  });
  return (
    <Row className="gx-2 gy-2">
     {NewsList}
  </Row>
  );
};

export default HeroNews;
