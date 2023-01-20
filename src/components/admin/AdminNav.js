import { Link } from "react-router-dom"
import classes from "./sidenav.module.css"
const AdminNav=()=>{
    return(
        <div className={classes["side-nav"]}>
                         <button className={classes["list-heading"]}><Link to='/admin/news'>News</Link></button> 
                         <button className={classes["list-heading"]}><Link to='/admin/categories'>Categories</Link></button> 
        </div>
    )

}
export default AdminNav