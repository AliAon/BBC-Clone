import { Col, Container } from "react-bootstrap"
import classes from './AdminContent.module.css'
import Row from "react-bootstrap/Row"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Fragment, useEffect, useState } from "react";
import AddCategoryForm from "./Components/AddCategoryForm";

const PageCategories=()=>{
    const [category,setCategory]=useState([])

    const Getcategory=async()=>{
        const Getcategory=await fetch('http://localhost:4000/api/categories')
        const category=await Getcategory.json()
        setCategory(category)
    }

    useEffect(()=>{
       Getcategory()
    },[])
    async function RemoveHandler (id){
        const Getcategory=await fetch(`http://localhost:4000/api/categories/${id}`,
        {
            method:'DELETE'
        })
        const category=await Getcategory.json()
    }
    const categoryList=category.map((el)=>{
        const id=el._id
        return (
            <tr key={el.id}>
                <td>{el.title}</td>
                <td><Button variant="outline-danger" onClick={RemoveHandler.bind(null,id)} size="sm">Remove</Button></td>
                <td><Button variant="outline-secondary" size="sm">Edit</Button></td>
            </tr>  
        )
    })
    const RefreshHandler=async()=>{
        const Getcategory=await fetch('http://localhost:4000/api/categories')
        const category=await Getcategory.json()
        setCategory(category)
    }

    return(
        
        <div className={classes["side-content"]}>
            <Container>
                <Row>
                    <Col>
                    <div className={classes["post-data"]}>
                        <Row className={classes["mb-4"]}>
                            <Col>
                              <h6 className={classes["post-data-h6"]}>Categories</h6>
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
                                        <th>Category</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categoryList}                                 
                                </tbody>
                            </Table>
                    </div>
                    </Col>
                    <Col>
                    <AddCategoryForm/>
                    </Col>
                </Row>
        </Container>
    </div>

    )

}
export default PageCategories