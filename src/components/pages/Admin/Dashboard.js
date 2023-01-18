import { Col, Container } from "react-bootstrap"
import classes from './Dashboard.module.css'
import Row from "react-bootstrap/Row"
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';


const Dashboard=()=>{

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