import { baseURL, config } from '../services'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { CardGroup, Card, Button, Dropdown, DropdownButton, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Wefts(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [length, setLength] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [value, setValue] = useState(0)

  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    if (params.id && props.wefts.length > 0) {
      const weftDetails = props.wefts.find((weft) => params.id === weft.id)

      if (weftDetails) {
        setName(weftDetails.fields.name)
        setDescription(weftDetails.fields.description)
        setLength(weftDetails.fields.length)
        setPrice(weftDetails.fields.price)
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
    setValue(e.target.textContent)
  }
  const handleValueChange = (e) => {
    if (value !== 0) {
        setPrice(price + 15)
    }
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
                <DropdownButton key="dropdown-button" id="dropdown-button-light" variant="secondary" size="sm"  title={(value === 0) ? "Lengths" : value } onClick={handleSelect} > 
                  <Dropdown.Item key="option-1" onClick={handleSelect}>{length}"</Dropdown.Item>
                  <Dropdown.Item key="option-2" onClick={handleValueChange}>{length + 2}"</Dropdown.Item>
              </DropdownButton>
            </ListGroupItem>
              <ListGroupItem key="price">${price}</ListGroupItem>
          </ListGroup>
        </Card>
        <Card >
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>     
            <Button
              variant="primary"
              type="submit"
              onClick={() => (window.location.href = `/edit/${params.id}`)}
              style={{ marginTop: "0px", width: "100%" }}
            > Edit Product
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={handleDelete}
              style={{ marginTop: "5px", width: "100%" }}
            > Delete Product
            </Button>
        </Card>
      </CardGroup>
      </div>
    </>
  )
}