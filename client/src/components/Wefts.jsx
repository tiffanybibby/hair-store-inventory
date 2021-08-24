import { Link } from 'react-router-dom'
import { baseURL, config } from '../services'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'

function Wefts(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [length, setLength] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

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
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{length}</p>
      <p>{price}</p>
      <img src={image} alt="weft" />
      <br/>
      <button onClick={handleDelete}>Delete</button>
      <br/>
      <Link to={`/edit/${params.id}`}>
        <button>Edit Product</button></Link>
    </article>
  )
}

export default Wefts