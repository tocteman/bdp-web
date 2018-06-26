import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const InnerForm = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  isSubmitting,
  status
}) => (
    <Form>
      <div className="flex flex-col items-center md:items-stretch">
        <div className="py-3 px-2 px-4 mx-auto">
          <label className="font-medium mx-auto">
            Cuéntanos:<br />
          </label>
          <textarea lang="es" name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-blue-lightest border-green-lightest rounded-lg shadow py-3 px-4 text-sm w-48 xs:w-64 sm:w-96 md:w-128 my-2" placeholder="Tu idea..."></textarea>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-stretch ">
        <div className="md:flex justify-around">
          <div className=" py-3 px-4">
            <label className="font-medium">
              Nombre:<br />
            </label>
            {touched.nombre && errors.nombre && <div className="text-sm py-2 italic text-red-light">{errors.nombre}</div>}
            <Field type="text" name="nombre" className="appearance-none text-grey-lighter bg-grey-darkest rounded-lg shadow py-3 px-4 text-sm my-2 w-48 xs:w-64 sm:w-96 md:w-48" />
          </div>

          <div className="py-3 px-2 px-4">
            <label className="font-medium">
              Apellido:<br />
            </label>
            {touched.apellido && errors.apellido && <div className="text-sm py-2 italic text-red-light">{errors.apellido}</div>}
            <Field type="text" name="apellido" className="appearance-none text-grey-lighter bg-grey-darkest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-stretch">
        <div className="py-3 px-2 px-4 mx-auto">
          <label className="font-medium">
            Email:<br />
          </label>
          {touched.correo && errors.correo && <div className="text-sm py-2 italic text-red-light">{errors.correo}</div>}
          <Field type="email" name="correo" placeholder="Email" className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-lighest border-green-lightest block rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2 mx-auto w-48 xs:w-64 sm:w-96" />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-stretch ">
        <div className="md:flex justify-around">
          <div className="py-3">
            <label className="font-medium">
              País:<br />
            </label>
            <div className="relative">
              <Field component="select" name="pais" className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-darkest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2">
                <option value="México">México</option>
                <option value="Chile">Chile</option>
                <option value="España">España</option>
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="Perú">Perú</option>
                <option value="Brasil">Brasil</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Panamá">Panamá</option>
              </Field>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="fill-current ml-4 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          <div className="py-3">
            <label className="font-medium">
              Dispositivo:<br />
            </label>
            <div className="relative">
              <Field component="select" name="dispositivo" className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-darkest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2">
                <option value="Android">Android</option>
                <option value="iPhone">iPhone</option>
              </Field>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="py-3 px-2 px-4 max-w-sm md:max-w-lg py-3">
          <label className="font-medium">
            Banco:<br />
          </label>
          {touched.banco && errors.banco && <div className="text-sm py-2 italic text-red-light">{errors.banco}</div>}
          <div className="relative">
            <Field type="text" name="banco" className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-lighest border-green-lightest block rounded-lg shadow py-3 px-4 text-sm w-48 xs:w-64 sm:w-96 md:w-128 my-2 mx-auto" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="mt-4 mx-2 sm:mx-4 rounded text-white bg-green active:bg-green-dark px-8 py-3 shadow-md" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
        {status && status.success && <div className="text-large py-4 text-green">¡Gracias! Hemos recibido tu información.</div>} 
      </div>

    </Form>
  )

const OuterForm = withFormik({
  mapPropsToValues({ correo, message, nombre, apellido, pais, dispositivo, banco, errors }) {
    return {
      correo: correo || '',
      message: message || '',
      nombre: nombre || '',
      apellido: apellido || '',
      pais: pais || 'México',
      dispositivo: dispositivo || 'Android',
      banco: banco || '',
    }
  },
  validationSchema: Yup.object().shape({
    correo: Yup.string('¿Cuál es tu dirección de correo?').email('Por favor asegúrate que sea una dirección válida').required('¿Cuál es tu dirección de correo?'),
    nombre: Yup.string().required('¿Cuál es tu nombre?'),
    apellido: Yup.string().required('¿Cuál es tu apellido?'),
    banco: Yup.string().required('Por favor cuéntanos de qué banco eres cliente'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    setStatus({ success: false });
    setTimeout(() => {
      _cio.identify({
        id: values.correo,
        email: values.correo,
        created_at: Math.floor(Date.now() / 1000),
        name: values.nombre,
        apellido: values.apellido,
        pais: values.pais,
        dispositivo: values.dispositivo,
        banco: values.banco,
        message: values.message,
        registro: true,
        interesIdea: true
      })
      resetForm();
      setSubmitting(false)
      setStatus({ success: true })
      setTimeout(() => { setStatus({ success: false }) }, 3000)
    }, 1200)
    setStatus({ success: false });
  }
})(InnerForm)

const RegistroFormAlt = () => (
  <div className="mx-auto sm:max-w-sm md:max-w-md">
    <OuterForm className="mx-auto" />
  </div>
)

export default RegistroFormAlt