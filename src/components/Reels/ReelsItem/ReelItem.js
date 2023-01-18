import classes from './ReelItem.module.css'
const ReelItem = (props) => {
  return (
    <div className="news-card">
      <div className="card">
        <img
          className="card-img-top"
          src={props.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h6 className={classes["card-title"]}>
            {props.title}
          </h6>
          <p className="card-text">
           {props.exerpt}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ReelItem;
