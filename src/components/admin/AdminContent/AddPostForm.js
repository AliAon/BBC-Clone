import { Fragment, useEffect, useState } from "react";
import classes from "./AddPostForm.module.css"
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import { Col, Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { json } from "react-router";
const AddPostForm=()=>{
    const [GetCategories,SetCategories]=useState([])
    const [title,settitle]=useState("")
    const [excerpt,setexcerpt]=useState("")
    const [tag,settag]=useState("")
    const [imagefile,setimage]=useState("")
    const [category,setcategory]=useState("")

    const GetCategory=async()=>{
        const GetCategories=await fetch('http://localhost:4000/api/categories')
        const news=await GetCategories.json()
        SetCategories(news)
    }
    useEffect(()=>{
       GetCategory()
    },[])
   
    const categoryList=GetCategories.map((el)=>{
        return(
                <option value={`${el._id}`}>{el.title}</option>
        )
    })
    const titleHandler=(e)=>{
        settitle(e.target.value)
    }
    const selectHandler=(e)=>{
        setcategory(e.target.value)
    }
    const fileHandler=(e)=>{
        setimage(e.target.files[0])
    }
    const tagHandler=(e)=>{
        settag(e.target.value)
    }
    const excerpthandler=(e)=>{
        setexcerpt(e.target.value)
    }
    const AddPost=async(formdata)=>{
        const res=await fetch('http://localhost:4000/api/news',{
            body:formdata,
            method:'POST'
        })
        const result=await res.json()
        console.log(result)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const formdata=new FormData()
        formdata.append('title',title)
        formdata.append('excerpt',excerpt)
        formdata.append('featuredimage',imagefile)
        formdata.append('category',category)
         AddPost(formdata)
        
        }
    
    return(
        <Fragment>
               <div className={classes["add-post-space"]}>
                    <h6 className={classes["post-data-h6"]}>Add Post</h6>
                    <Form onSubmit={submitHandler}  encType="multipart/form-data">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Title" onChange={titleHandler}/>
                        </Form.Group>
                            <Form.Control className="mb-3"
                            as="textarea"
                            placeholder="Exerpt"
                            style={{ height: '100px' }}
                            onChange={excerpthandler}
                            />
                        <Row>
                            <Col>
                                <Form.Label className={classes["form-label"]} >Categories</Form.Label>
                                <Form.Select aria-label="Default select example" className="mb-3" onChange={selectHandler}>
                                {categoryList}                                      
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label className={classes["form-label"]}>Tags</Form.Label>
                                <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="text"  size="sm"  placeholder="Tags"  onChange={tagHandler}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label className={classes["form-label"]}>Featured Image</Form.Label>
                                <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file"  size="sm"  onChange={fileHandler}/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                             <Button variant="success" type="submit">
                            Save
                        </Button>
                    </Form>

                </div>
        </Fragment>
    )
}
export default AddPostForm