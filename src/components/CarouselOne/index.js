import React from 'react';
import ReactDOM from 'react-dom';
import '../../layouts/carousel.css'
import Cabify from '../../img/fotos_reglas/cabify_blanco.jpg'
import Cerato from '../../img/fotos_reglas/cerato.jpg'
import GoogleMaps from '../../img/fotos_reglas/google_maps.jpg'
import VacacionesPalmeras from '../../img/fotos_reglas/vacaciones_palmeras.jpg'
import TazaCarton from '../../img/fotos_reglas/tazaCarton.jpg'
import IPhoneX from '../../img/fotos_reglas/iPhoneX.jpg'
import SeleccionMexico from '../../img/fotos_reglas/escudo_mexico.jpg'
import CopaMundo from '../../img/fotos_reglas/copaDelMundo.jpg'

const pics = [Cabify, GoogleMaps, TazaCarton, SeleccionMexico ];
const picsDos = [Cerato, VacacionesPalmeras, IPhoneX, CopaMundo];
const inicioEnunciado = ['Cada viaje', 'Cada  vez que', 'Cada café', 'Cada gol',];
const explicacionUno = ['en Cabify', 'llego a la oficina', 'en mi cafetería favorita', 'de la Selección',];
const explicacionDos = ['comprar mi auto', 'mis vacaciones 2018', 'mi teléfono nuevo', 'ir al Mundial']

export default class CarouselOne extends React.Component {
  constructor(props) {
    super(props);
    const idxStart = 0;
    this.state = {
      index: idxStart,
      next: this.getNextIndex(idxStart),
      move: false,
    };
  }

  getNextIndex(idx) {
    if (idx >= pics.length - 1) {
      return 0;
    }
    return idx + 1;
  }

  setIndexes(idx) {
    this.setState({
      index: idx,
      next: this.getNextIndex(idx)
    });
  }
  componentDidMount() {

    setInterval(() => {
      // on
      this.setState({
        move: true
      });
      // off
      setTimeout(() => {
        this.setState({
          move: false
        });
        this.setIndexes(this.getNextIndex(this.state.index));
      }, 500); // same delay as in the css transition here

    }, 5000);
  }
  render() {
    const move = this.state.move ? 'move' : '';
    if (this.state.move) {

    }
    return (
      <div className="flex flex-col sm:block py-4  max-w-xl mx-auto ">
        <div className="lg:flex justify-around text-center">
          <div className="xs:flex items-center justify-around py-4 md:py-2 lg:w-1/2">
            <div className="mask-texto bg-white py-4 font-semibold xs:w-2/5 w-48 mx-auto ">
              <div className={`currentTexto font-semibold text-2xl sm:text-3xl w-48 text-center ${move}`}>
                  {inicioEnunciado[this.state.index]}
                </div>
              <div className={`nextTexto texto font-semibold text-2xl sm:text-3xl w-48 text-center py-4 ${move}`}>
                  {inicioEnunciado[this.state.next]}
                </div>
            </div>
        <div className="flex flex-col items-center mx-auto">
          <div className="mask mb-4">
            <div className="pic-wrapper">
              <div className={`current pic ${move}`}>
                
                <img src={pics[this.state.index]} alt="" />
              </div>
              <div className={`next pic ${move}`}>
                
                <img src={pics[this.state.next]} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="mask-texto items-center justify-center  flex flex-col">
                  <div className={`currentTexto mx-auto text-grey-dark text-sm  w-48 ${move}`}>
              {explicacionUno[this.state.index]}
              </div>
                  <div className={`nextTexto texto  text-grey-dark text-sm w-48  ${move}`}>
              {explicacionUno[this.state.next]}
              </div>
           </div>
          </div>
        </div>
          </div>
          <div className="xs:flex items-center justify-around md:py-2 lg:w-1/2 mx-auto">
            <div className="text-2xl sm:text-3xl pb-8 sm:pb-0 font-semibold text-center mx-auto xs:w-2/5 w-48">ahorro para</div>
            <div className="flex flex-col items-center mx-auto">
              <div className="mask mb-4 xs:w-3/5">
              <div className="pic-wrapper">
                <div className={`current pic ${move}`}>
                  <img src={picsDos[this.state.index]} alt="" />
                </div>
                <div className={`next pic ${move}`}>
                  <img src={picsDos[this.state.next]} alt="" />
                </div>
              </div>
            </div>
              <div className="mask-texto items-center justify-center flex flex-col">
                <div className={`currentTexto text-grey-dark w-48 text-sm ${move}`}>
                  {explicacionDos[this.state.index]}
                </div>
                <div className={`nextTexto texto text-grey-dark w-48 text-sm ${move}`}>
                  {explicacionDos[this.state.next]}
                </div>
              </div>
            </div>
        </div>
        </div>
        <hr className="py-4" />
      </div>
    );
  }
}
