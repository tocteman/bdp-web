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
      <div className="flex flex-col md:block py-4  max-w-xl mx-auto ">
        <div className="lg:flex mx-auto text-center sm:text-left md:text-center lg:text-left">
          <div className="sm:flex items-center py-4 md:py-2 mx-auto">
            <div className="mask-texto font-semibold text-2xl sm:text-3xl mx-auto">
              <div className="pic-wrapper">
                <div className={`current texto ${move}`}>
                    {inicioEnunciado[this.state.index]}
                  </div>
                <div className={`next texto ${move}`}>
                    {inicioEnunciado[this.state.next]}
                  </div>
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
            <div className="mask-texto items-center text-center">
            <div className="pic-wrapper">
                  <div className={`current texto text-grey-dark text-sm  ${move}`}>
                    {explicacionUno[this.state.index]}
                  </div>
                  <div className={`next texto text-grey-dark text-sm ${move}`}>
                  {explicacionUno[this.state.next]}
                  </div>
                  </div>
           </div>
          </div>
        </div>
          </div>
          <div className="sm:flex justify-around items-center md:py-2 mx-auto">
            <div className="mask-texto font-semibold text-2xl sm:text-3xl mx-auto">
              <div className="pic-wrapper">
            <div className="texto current">ahorro para</div>
              </div>
            </div>
            <div className="flex flex-col items-center mx-auto">
              <div className="mask mb-4 ">
              <div className="pic-wrapper">
                <div className={`current pic ${move}`}>
                  <img src={picsDos[this.state.index]} alt="" />
                </div>
                <div className={`next pic ${move}`}>
                  <img src={picsDos[this.state.next]} alt="" />
                </div>
              </div>
            </div>
              <div className="mask-texto items-center text-center">
                <div className="pic-wrapper">
                <div className={`current texto text-grey-dark text-sm ${move}`}>
                  {explicacionDos[this.state.index]}
                </div>
                <div className={`next texto text-grey-dark text-sm ${move}`}>
                  {explicacionDos[this.state.next]}
                  </div>
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
