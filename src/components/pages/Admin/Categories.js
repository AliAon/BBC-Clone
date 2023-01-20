import { Col, Container } from "react-bootstrap"
import classes from './Dashboard.module.css'
import Row from "react-bootstrap/Row"
import AdminNav from "../../admin/AdminNav";
import PageCategories from "../../admin/AdminPages/Categories/PageCategories";
const Categories=()=>{
    return <Container fluid className="gx-0 ">
        <Row className={classes["dashborad-header"]}>
            <Col>
              <h2 className={classes["dashborad-header-title"]}>Dashboard</h2>
            </Col>
        </Row>
        <Row className="gx-0 vh-100">
            <Col lg={1} className="vh-100">
                <AdminNav/>
            </Col>
            <Col lg={11} className="vh-100">
                <PageCategories/>
            </Col>
        </Row>
    </Container>

}
export default Categories