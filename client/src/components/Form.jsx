import { useState, useEffect } from 'react';
import axios from 'axios'
import { baseURL, config } from '../services'
import {useParams} from 'react-router-dom'

function Form(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [length, setLength] = useState('')
  const [price, setPrice] = useState('')

  const params = useParams()

  useEffect(() => {
    if (params.id && props.wefts.length > 0) {
      console.log("inside useEffect of Form component")
      const weftToEdit = props.wefts.find(weft => params.id === weft.id)

      if (weftToEdit) {
        setName(weftToEdit.fields.name)
        setDescription(weftToEdit.fields.description)
        setLength(weftToEdit.fields.length)
        setPrice(weftToEdit.fields.price)
      }
    }
  }, [params.id, props.wefts])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newProduct = {
      name,
      description,
      length,
      price
    }
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newProduct }, config)
    } else {
      await axios.post(baseURL, { fields: newProduct }, config)
 
    }
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input id='name' type='text' onChange={e => setName(e.target.value)} value={name} />
     <br/>
      <label htmlFor='description'>Description:</label>
      <textarea id='description' onChange={e => setDescription(e.target.value)} value={description} />
      <br/>
      <label htmlFor='length'>Length:</label>
      <textarea id='length' onChange={e => setLength(e.target.value)} value={length} />
      <br/>
      <label htmlFor='price'>Price:</label>
      <textarea id='price' onChange={e => setPrice(e.target.value)} value={price} />
      <button type='submit'>Submit</button>
    </form>
  )

}

export default Form;