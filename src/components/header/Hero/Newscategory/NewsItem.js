import classes from './NewsItem.module.css'
const NewsItem = (props) => {
  return (
    <div className={classes["news-item"]}>
         <img className={classes.img} src={props.image} />
         <div className={classes.overlay}></div>
         <h2 className={classes["hero__news_grid-title"]}>
           {props.title}
         </h2>
         <span className={classes["hero__tag-grid-news"]}>{props.tag}</span>
       </div>
  );
};
export default NewsItem;
