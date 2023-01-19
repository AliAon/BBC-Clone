import { Fragment, useEffect, useState } from "react";
import classes from "./AddPostForm.module.css"
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import { Col, Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
const AddPostForm=()=>{
    const [GetCategories,SetCategories]=useState([])

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
                <option value={`${el.slug}`}>{el.title}</option>
        )
    })
    return(
        <Fragment>
               <div className={classes["add-post-space"]}>
                    <h6 className={classes["post-data-h6"]}>Add Post</h6>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Title" />
                        </Form.Group>
                            <Form.Control className="mb-3"
                            as="textarea"
                            placeholder="Exerpt"
                            style={{ height: '100px' }}
                            />
                        <Row>
                            <Col>
                                <Form.Label >Categories</Form.Label>
                                <Form.Select aria-label="Default select example" className="mb-3" >
                                {categoryList}                                      
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label >Featured Image</Form.Label>
                                <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file"  size="sm" />
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