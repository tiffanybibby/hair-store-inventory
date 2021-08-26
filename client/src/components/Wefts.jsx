import { baseURL, config } from '../services'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { CardGroup, Card, Button, Dropdown, DropdownButton, ListGroup, ListGroupItem } from "react-bootstrap";

function Wefts(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [length, setLength] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  // const [type, setType] = useState('')
  const [value, setValue] = useState(0)
  console.log(value)

  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    if (params.id && props.wefts.length > 0) {
      console.log("inside useEffect of Wefts component")
      const weftDetails = props.wefts.find((weft) => params.id === weft.id)
      console.log(params.id)

      if (weftDetails) {
        setName(weftDetails.fields.name)
        setDescription(weftDetails.fields.description)
        setLength(weftDetails.fields.length)
        setPrice(weftDetails.fields.price)
        // setType(weftDetails.fields.type)
        setImage(weftDetails.fields.image)
      }
    }
  }, [params.id, props.wefts])

  const handleDelete = async (event) => {
    await axios.delete(`${baseURL}/${params.id}`, config)
    history.push(`/wefts`)
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)

  }
  
  const handleSelect= (e)=>{
    console.log(e.target.textContent);
    setValue(e.target.textContent)
    console.log(value)
  }
  
  return (
    <>
<div style={{ margin: "auto", width: "60%" }}>
      <CardGroup>
          <Card style={{ textAlign: "center" }} >
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
                <DropdownButton id="dropdown-button-dark" variant="secondary" size="sm" menuVariant="light" title={(value === 0) ? "Length" : value } > 
                <Dropdown.Item onClick={handleSelect}> 10 inch</Dropdown.Item>
                <Dropdown.Item onClick={handleSelect}> 12 inch</Dropdown.Item>
                <Dropdown.Item onClick={handleSelect}> Something else</Dropdown.Item>
              </DropdownButton>
            </ListGroupItem>
            <ListGroupItem>${price}</ListGroupItem>
          </ListGroup>
        </Card>

        <Card >
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/* <ListGroupItem>{type}</ListGroupItem> */}
          </ListGroup>
            
            <Button
              variant="primary"
              type="submit"
              onClick={() => (window.location.href = `/edit/${params.id}`)}
              style={{ marginTop: "0px", width: "100%" }}
            >
              Edit Product
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={handleDelete}
              style={{ marginTop: "5px", width: "100%" }}
            >
              Delete Product
            </Button>
       
        </Card>
      </CardGroup>
      </div>
    </>

  )
}

export default Wefts