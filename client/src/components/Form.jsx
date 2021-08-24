import { useState, useEffect } from 'react';
import axios from 'axios'
import { baseURL, config } from '../services'
import {useParams, useHistory} from 'react-router-dom'

function Form(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [length, setLength] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    if (params.id && props.wefts.length > 0) {
      console.log("inside useEffect of Form component")
      const weftToEdit = props.wefts.find(weft => params.id === weft.id)
      console.log(params.id)
      
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
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input id='name' type='text' onChange={e => setName(e.target.value)} value={name} />
      <br />
      <br/>
      <label htmlFor='description'>Description: </label>
      <textarea id='description' onChange={e => setDescription(e.target.value)} value={description} />
      <br />
      <br/>
      <label htmlFor='length'>Length: </label>
      <input id='length' type='text' onChange={e => setLength(e.target.value)} value={length} />
      <br />
      <br/>
      <label htmlFor='price'>Price: </label>
      <input id='price' type='number' onChange={e => setPrice(e.target.valueAsNumber)} value={price} />
      <br />
      <br/>
      <label htmlFor='image'>Image: </label>
      <input id='image' type='link' placeholder="insert image link" onChange={e => setImage(e.target.value)} value={image} />
      <br />
      <br/>
      <button type='submit'>Submit</button>
    </form>
  )

}

export default Form;


