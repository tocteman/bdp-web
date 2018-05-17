import React from "react";
import AppleStore from '../../img/aunNoTienes/apple_store.svg'
import GooglePlay from '../../img/aunNoTienes/google_play.svg'

const AunNoLoTienes = () => (
  <div className="flex flex-col bg-black text-grey-lightest mt-0 pt-16 pb-16 text-center">
    <div className="mx-auto">
      <h3 className="font-medium px-4">¿Aún no tienes <span className="text-white">Übank?</span></h3>
      <p className="font-light px-4">Descarga la app y comienza a hacer tus metas realidad.</p>
      <div className="flex px-4 justify-around py-6">
        <img src={GooglePlay} className="w-32" />
        <img src={AppleStore} className="w-32" />
      </div>
    </div>
  </div >
)

export default AunNoLoTienes;