import React from "react";
import AppleStore from '../../img/aunNoTienes/apple_store.svg'
import GooglePlay from '../../img/aunNoTienes/google_play.svg'
import Link from "gatsby-link";
import Microform from "../../components/MicroForm"

const IdeaRegla = () => (
  <div className="sm:flex text-grey-lightest mt-0 text-center">
    <div className="sm:w-1/2 px-4 bg-pure-black py-16">
      <h3 className="pb-3">¿Tienes ideas para hacer una Regla de Ahorro?</h3>
      <hr/>
      <p className="px-8 pt-3 leading-normal">Nuestra creatividad es limitada. Ingresa una idea que te gustaría que construyamos para que tu ahorro sea aún más personalizado.</p>
      <div className="mx-auto text-center"><Microform /></div>
    </div>
    <div className="sm:w-1/2 py-16 px-4 bg-black">
      <h3 className="pb-3 text-white">¿Aún no tienes Übank?</h3>
      <hr/>
      <p className="pt-3"> Descarga la app hoy y comienza a hacer tus metas realidad.</p>
      <div className="flex px-4 justify-center py-12">
        <img src={GooglePlay} className="w-32 mx-6" />
        <img src={AppleStore} className="w-32 mx-6" />
      </div>
    </div>
  </div >
)

export default IdeaRegla;