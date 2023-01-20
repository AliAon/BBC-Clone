import { Fragment, useEffect, useState } from "react";
import classes from "./AddPostForm.module.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const AddCategoryForm=(props)=>{
    const [title,settitle]=useState("")
    const [slug,setslug]=useState("")
    const titleHandler=(e)=>{
        settitle(e.target.value)
    }
  
    const slugHandler=(e)=>{
        setslug(e.target.value)
    }
  
    const AddCategory=async(formdata)=>{
        const res=await fetch('http://localhost:4000/api/categories',{
            body:JSON.stringify(formdata),
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const result=await res.json()
    }
    const submitHandler=(e)=>{
        e.preventDefault()
       const formdata={
            title,
            slug
        }
         AddCategory(formdata)
         settitle('')
         setslug('')
        }
    
    return(
        <Fragment>
               <div className={classes["add-post-space"]}>
                    <h6 className={classes["post-data-h6"]}>Add Category</h6>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Title" value={title} onChange={titleHandler}/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="text"  size="sm"  placeholder="Slug"  value={slug} onChange={slugHandler}/>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Save
                        </Button>
                    </Form>

                </div>
        </Fragment>
    )
}
export default AddCategoryForm