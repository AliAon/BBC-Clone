import { Col, Container } from "react-bootstrap"
import classes from './AdminContent.module.css'
import Row from "react-bootstrap/Row"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Fragment, useEffect, useState } from "react";
import AddPostForm from "./AddPostForm";

const AdminContent=()=>{
    const [news,setnews]=useState([])

    const GetNews=async()=>{
        const GetNews=await fetch('http://localhost:4000/api/news')
        const news=await GetNews.json()
        setnews(news)
    }

    useEffect(()=>{
       GetNews()
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
    return(
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
                    <AddPostForm/>
                    </Col>
                </Row>
        </Container>
    </div>

    )

}
export default AdminContent