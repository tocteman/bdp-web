import React from "react";
import AppleStore from '../../img/aunNoTienes/apple_store.svg'
import GooglePlay from '../../img/aunNoTienes/google_play.svg'
import Link from "gatsby-link";
import RegistroFormAlt from '../../components/RegistroFormAlt'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

const IdeaRegla = () => (
  <div className="flex flex-col text-grey-light mt-0">
    <div className="px-4 bg-pure-black py-16">
      <h3 className="pb-3 text-grey-lighter text-center">¿Tienes ideas para hacer una Regla de Ahorro?</h3>
      <hr/>
      <p className="px-8 pt-3 leading-normal max-w-md mx-auto py-3 text-center">Nuestra creatividad es limitada. Ingresa una idea que te gustaría que construyamos para que tu ahorro sea aún más personalizado.</p>
      <div className="mx-auto"><RegistroFormAlt /></div>
    </div>
  </div >
)

export default IdeaRegla;