import { useState, useEffect } from 'react';
import axios from 'axios'
import { baseURL, config } from '../services'
import { useParams, useHistory } from 'react-router-dom'
import { Form, Button, Container } from "react-bootstrap"

export default function Forms(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [length, setLength] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    if (params.id && props.wefts.length > 0) {
      const weftToEdit = props.wefts.find(weft => params.id === weft.id)
      
      if (weftToEdit) {
        setName(weftToEdit.fields.name)
        setDescription(weftToEdit.fields.description)
        setLength(weftToEdit.fields.length)
        setPrice(weftToEdit.fields.price)
        setImage(weftToEdit.fields.image)
      }
    }
  }, [params.id, props.wefts])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newProduct = {
      name,
      description,
      length,
      price,
      image
    }
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newProduct }, config)
      history.push(`/wefts/${params.id}`)
    } else {
      await axios.post(`${baseURL}`, { fields: newProduct }, config)
      history.push("/wefts")
    }
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
    
  }
  return (
<Container>
    <Form onSubmit={handleSubmit} style={{margin:"20px"}}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name of Product" value={name}  onChange={e => setName(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicLength">
    <Form.Label>Length</Form.Label>
    <Form.Control type="text" placeholder="Enter Length of Product" value={length}  onChange={e => setLength(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPrice">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Enter Price of Product" value={price} onChange={e => setPrice(e.target.valueAsNumber)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicLink">
    <Form.Label>Image</Form.Label>
    <Form.Control type="link" placeholder="insert image link" value={image} onChange={e => setImage(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
      </Form>
      </Container>
  
  )
  }