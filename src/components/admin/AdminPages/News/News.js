import { Col, Container } from "react-bootstrap"
import classes from './AdminContent.module.css'
import Row from "react-bootstrap/Row"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Fragment, useEffect, useState } from "react";
import AddPostForm from "./Components/AddPostForm";

const News=()=>{
    const [news,setnews]=useState([])

    const GetNews=async()=>{
        const GetNews=await fetch('http://localhost:4000/api/news')
        const news=await GetNews.json()
        setnews(news)
    }

    useEffect(()=>{
       GetNews()
    },[])
    async function RemoveHandler (id){
        const GetNews=await fetch(`http://localhost:4000/api/news/${id}`,
        {
            method:'DELETE'
        })
        const news=await GetNews.json()
    }
    const newsList=news.map((el)=>{
        const id=el._id
        return (
            <tr key={el.id}>
                <td>{el.title}</td>
                <td>{el.category.title}</td>
                <td><Button variant="outline-danger" onClick={RemoveHandler.bind(null,id)} size="sm">Remove</Button></td>
                <td><Button variant="outline-secondary" size="sm">Edit</Button></td>
            </tr>  
        )
    })
    const RefreshHandler=async()=>{
        const GetNews=await fetch('http://localhost:4000/api/news')
        const news=await GetNews.json()
        setnews(news)
    }

    return(
        <div className={classes["side-content"]}>
            <Container>
                <Row>
                    {console.log(news)}
                    <Col>
                    <div className={classes["post-data"]}>
                        <Row className=" justify-content-between">
                            <Col>
                              <h6 className={classes["post-data-h6"]}>News</h6>
                            </Col>
                            <Col>
                                <div className={classes["refreshbtn"]}>
                                  <Button variant="outline-success" onClick={RefreshHandler}>Refresh</Button>
                                </div>
                            </Col>
                        </Row>
                      
                     
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
export default News