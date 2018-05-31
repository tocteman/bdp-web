import React, {Component} from 'react'
import axios from 'axios'

export default class ContactData extends Component {
  state = {
    nombre: '',
    apellido: '',
    email: '',
    comentario: '',
    loading: false,
  }

  contactHandler = (event) => {
    event.preventDefault();
    axios.post('/archivo.json', order) // falta el axios orders y en que archivo van los datos
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/')
    })
    .catch(error=>{
      this.setState({loading: false})
    })
  }

  render(){
    let form = (
      <form>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <Button></Button>
      </form>
    )
  }


}