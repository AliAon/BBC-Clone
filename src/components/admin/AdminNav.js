import { Link } from "react-router-dom"
import classes from "./sidenav.module.css"
const AdminNav=()=>{
    return(
        <div className={classes["side-nav"]}>
                         <button className={classes["list-heading"]}><Link to='/#'>News</Link></button> 
                         <button className={classes["list-heading"]}><Link to='/#'>Categories</Link></button> 
        </div>
    )

}
export default AdminNav