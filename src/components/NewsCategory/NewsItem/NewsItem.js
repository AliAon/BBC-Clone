import classes from './NewsItem.module.css'
import { Link } from "react-router-dom";
const NewsItem = (props) => {
  return (
    <div className="news-card">
      <div className="card">
        <img
          className="card-img-top"
          src={props.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <Link  href={`/news/${props.id}`} className={classes['card-title']}>{props.title}
            </Link>
          <p className="card-text">
           {props.exerpt}
          </p>
          <span className={classes["hero__tag-grid-news"]}>{props.tag}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
