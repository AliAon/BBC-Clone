import { Col, Container } from "react-bootstrap"
import classes from './Dashboard.module.css'
import Row from "react-bootstrap/Row"
import Table from 'react-bootstrap/Table';

const Dashboard=()=>{

    const GetNews=()=>{
        fetch('')

    }

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
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Post</th>
                                        <th>Category</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
             
                </div>
            </Col>
        </Row>
    </Container>

}
export default Dashboard