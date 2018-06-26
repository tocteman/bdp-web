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
      <div className="py-2">
        <div className="flex flex-col items-end max-w-md pin-y absolute sticky">
          <div className="cursor-pointer p-4 text-grey-darker text-2xl " onClick={this.handleClick}><FaClose /></div>
        </div>
        <div className="flex mx-auto max-w-xl items-start justify-center">
          <div className="mx-auto">
            <StandardForm/>
          </div>
        </div>
      </div>
    )

    return (
      <div className="inline">
        <button onClick={this.handleClick} className="relative inline text-green hover:text-grey-darkest hover:underline">Escríbenos</button>
        {this.state.showModal ? modal: ''}
      </div>
    )
  }
}

export default ModalForm