import { Link } from 'react-router-dom'
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
  return (
    <>

      <CardGroup style={{ padding: "50px" }}>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>${price}</ListGroupItem>
            <ListGroupItem>
              <DropdownButton id="dropdown-button-dark" variant="secondary" size="sm" menuVariant="light" title="Length">
                <Dropdown.Item> 10 inch</Dropdown.Item>
                <Dropdown.Item> 12 inch</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>


            </ListGroupItem>
          </ListGroup>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/* <ListGroupItem>{type}</ListGroupItem> */}
          </ListGroup>
          <Card.Body>
            <Button
              variant="primary"
              type="submit"
              onClick={() => (window.location.href = `/edit/${params.id}`)}
              style={{ marginTop: "5px", width: "100%" }}
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
          </Card.Body>
        </Card>
      </CardGroup>

    </>

  )
}

export default Wefts