import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import classes from "./Search.module.css"
const Search = () => {
  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Search
        </InputGroup.Text>
        <Form.Control
          placeholder="Enter Value"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className={classes['form-control','input-group-text']}
        />
      </InputGroup>
    </Form>
  );
};
export default Search;
