import classes from "./sidenav.module.css"
const AdminNav=()=>{
    return(
        <div className={classes["side-nav"]}>
                         <button className={classes["list-heading"]}>News</button> 
                         <button className={classes["list-heading"]}>Categories</button> 
        </div>
    )

}
export default AdminNav