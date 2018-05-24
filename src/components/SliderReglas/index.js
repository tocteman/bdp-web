import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import cabify from "../../img/fotos_reglas/cabify_blanco.jpg"
import escudoMexico from "../../img/fotos_reglas/escudo_mexico.jpg"

class SliderReglas extends React.Component {
  constructor(props ) {
    super(props)
    this.fotos = [cabify, escudoMexico]
    this.state = { fotosIndex: 0 }

    this.cambiarFoto = this.cambiarFoto.bind(this)
  }

  componentDidMount() {
    this.timeout = setTimeout(
      this.cambiarFoto,
      this.props.animDuration * 3000
    )
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout)
  }

  cambiarFoto() {
    this.setState(function ({ fotosIndex }) {
      const sigFotoIndex = ++fotosIndex % this.fotos.length
      return { fotosIndex: sigFotoIndex }
    }, function () {
      this.timeout = setTimeout(
        this.cambiarFoto,
        this.props.animDuration * 2000
      )
    })
  }

  render() {
    return (
      <div>
      <img src={this.fotos[this.state.fotosIndex]} width="300" height="300"/>
      </div>
    )
  }

}

export default SliderReglas;

