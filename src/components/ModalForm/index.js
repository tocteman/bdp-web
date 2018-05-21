import React, {Component} from 'react'
import StandardForm from '../StandardForm'
import FaClose from 'react-icons/lib/fa/close'

class ModalForm extends Component {
  constructor(props){
    super(props);
    this.state={showModal: false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }) )
  }

  render(){
    const modal = (
      <div className="py-8 mx-auto">
        <div className="flex mx-auto max-w-xl items-start justify-center">
          <div className="mx-auto">
            <StandardForm/>
          </div>
          <div className="cursor-pointer px-2 text-grey-darker " onClick={this.handleClick}><FaClose /></div>
        </div>
        
      </div>
    )

    return (
      <div className="inline">
        <button onClick={this.handleClick} className="relative inline text-green hover:text-grey-darkest">Escríbenos</button>
        {this.state.showModal ? modal: ''}
      </div>
    )
  }
}

export default ModalForm