import { Col, Container } from "react-bootstrap"
import classes from './Dashboard.module.css'
import Row from "react-bootstrap/Row"
import Table from 'react-bootstrap/Table';
import { Fragment, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Dashboard=()=>{

    const [news,setnews]=useState([])
    const [GetCategories,SetCategories]=useState([])

    const GetNews=async()=>{
        const GetNews=await fetch('http://localhost:4000/api/news')
        const news=await GetNews.json()
        setnews(news)
    }

    const GetCategory=async()=>{
        const GetCategories=await fetch('http://localhost:4000/api/categories')
        const news=await GetCategories.json()
        SetCategories(news)
    }
    useEffect(()=>{
       GetNews()
       GetCategory()
    },[])
    const newsList=news.map((el)=>{
        return (
            <tr>
                <td>{el.title}</td>
                <td>{el.category.title}</td>
                <td><Button variant="outline-danger" size="sm">Remove</Button></td>
                <td><Button variant="outline-secondary" size="sm">Edit</Button></td>
            </tr>  
        )
    })
    const categoryList=GetCategories.map((el)=>{
        return(
            <Fragment>
                <option value={`${el.slug}`}>{el.title}</option>
            </Fragment>
        )
    })

    return <Container fluid className="gx-0">
        <Row className={classes["dashborad-header"]}>
            <Col>
              <h2 className={classes["dashborad-header-title"]}>Dashboard</h2>
            </Col>
        </Row>
        <Row className="gx-0">
            <Col lg={1}>
                <div className={classes["side-nav"]}>
                         <button className={classes["list-heading"]}>News</button> 
                         <button className={classes["list-heading"]}>Categories</button> 
                </div>
            </Col>
            <Col lg={11}>
              
                <div className={classes["side-content"]}>
                <Container>
                    <Row>
                        <Col>
                        <div className={classes["post-data"]}>
                            <h6 className={classes["post-data-h6"]}>News</h6>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Post</th>
                                            <th>Category</th>
                                            <th>Delete</th>
                                            <th>Update</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {newsList}                                 
                                    </tbody>
                                </Table>
                        </div>
                            
                        </Col>
                        <Col>
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
                        </Col>
                    </Row>
                </Container>
             
                </div>
            </Col>
        </Row>
    </Container>

}
export default Dashboard