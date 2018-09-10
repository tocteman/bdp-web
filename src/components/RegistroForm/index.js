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

      <div className="flex flex-col items-center md:items-stretch ">
        <div className="md:flex justify-around">
          <div className=" py-3 px-4">
            <label className="font-medium text-piedra-lightest">
              Nombre:<br />
            </label>
            {touched.nombre && errors.nombre && <div className="text-sm py-2 italic text-red-light">{errors.nombre}</div>}
            <Field type="text" name="nombre" className="appearance-none text-piedra-quite-dark bg-white focus:bg-piedra-lighest rounded-lg shadow py-3 px-4 text-sm my-2 w-48 xs:w-64 sm:w-96 md:w-48 font-serif text-lg" />
          </div>

          <div className="py-3 px-2 px-4">
            <label className="font-medium text-piedra-lightest">
              Apellido:<br />
            </label>
            {touched.apellido && errors.apellido && <div className="text-sm py-2 italic text-red-light">{errors.apellido}</div>}
            <Field type="text" name="apellido" className="appearance-none text-piedra-quite-dark bg-white focus:bg-piedra-lightest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2 font-serif text-lg" />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center md:items-stretch ">
        <div className="md:flex justify-around">
          <div className=" py-3 px-4">
            <label className="font-medium text-piedra-lightest">
              Número Celular<br />
            </label>
            {touched.nroCelular && errors.nroCelular && <div className="text-sm py-2 italic text-red-light">{errors.nroCelular}</div>}
            <Field type="text" name="nroCelular" className="appearance-none text-piedra-quite-dark bg-white focus:bg-piedra-lighest rounded-lg shadow py-3 px-4 text-sm my-2 w-48 xs:w-64 sm:w-96 md:w-48" />
          </div>

          <div className="py-3 px-2 px-4">
            <label className="font-medium text-piedra-lightest">
              Código Banco del Pacífico:<br />
            </label>
            {touched.nroBanco && errors.nroBanco && <div className="text-sm py-2 italic text-red-light">{errors.nroBanco}</div>}
            <Field type="text" name="nroBanco" className="appearance-none text-piedra-quite-dark bg-white focus:bg-piedra-lightest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2" />
          </div>
        </div>
      </div> */}

      <div className="flex flex-col items-center md:items-stretch ">
        <div className="md:flex justify-around">
          <div className="py-3">
            <label className="font-medium text-piedra-lightest">
              Número de Cédula:<br />
            </label>
            <div className="relative">
              {touched.nroCedula && errors.nroCedula && <div className="text-sm py-2 italic text-red-light">{errors.nroCedula}</div>}
              <Field type="text" name="nroCedula" className="appearance-none text-piedra-quite-dark bg-white focus:bg-piedra-lightest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2 font-serif text-lg" placeholder="012345678-9"/>
            </div>
          </div>

          <div className="py-3">
            <label className="font-medium text-piedra-lightest">
              Dispositivo:<br />
            </label>
            <div className="relative">
              <Field component="select" name="dispositivo" className="appearance-none text-piedra-quite-dark bg-white focus:bg-piedra-lightest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2 font-serif text-lg">
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

      <div className="flex flex-col items-center md:items-stretch">
        <div className="py-3 px-2 px-4 mx-auto">
          <label className="font-medium text-piedra-lightest">
            Email:<br />
          </label>
          {touched.correo && errors.correo && <div className="text-sm py-2 italic text-red-light">{errors.correo}</div>}
          <Field type="email" name="correo" className="appearance-none text-piedra-quite-dark bg-white focus:bg-piedra-lighest border-green-lightest block rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2 mx-auto w-48 xs:w-64 sm:w-96 font-serif text-lg" />
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="mt-4 mx-2 sm:mx-4 rounded text-white bg-oceano active:bg-oceano-dark hover:bg-oceano-dark px-8 py-3 shadow-md" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
        {status && status.success && <div className="text-large py-4 text-cielo">¡Gracias! Hemos recibido tu información.</div>} 
      </div>

    </Form>
  )

const OuterForm = withFormik({
  mapPropsToValues({ correo, message, nombre, apellido, nroCelular, nroBanco, nroCedula, dispositivo, errors }) {
    return {
      correo: correo || '',
      message: message || '',
      nombre: nombre || '',
      apellido: apellido || '',
      nroCelular: nroCelular || '',
      nroBanco: nroBanco || '',
      nroCedula: nroCedula || '',
      dispositivo: dispositivo || 'Android',
    }
  },
  validationSchema: Yup.object().shape({
    correo: Yup.string('¿Cuál es tu dirección de correo?').email('Por favor asegúrate que sea una dirección válida').required('¿Cuál es tu dirección de correo?'),
    nombre: Yup.string().required('¿Cuál es tu nombre?'),
    apellido: Yup.string().required('¿Cuál es tu apellido?'),
    // nroBanco: Yup.number().required('¿Cuál es tu código de empleado?'),
    // nroCelular: Yup.number().required('¿Cuál es tu teléfono celular?'),
    nroCedula: Yup.string().matches(/^([0-9]){9}-?[0-9]/, {message: 'Por favor revisa tu número de cédula'}).required('¿Cuál es tu número de cédula?')
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
        nroCedula: values.nroCedula,
        // nroCelular: values.nroCelular,
        // nroBanco: values.nroBanco,
        dispositivo: values.dispositivo,
        registro_bdp: true
      })
      resetForm();
      setSubmitting(false)
      setStatus({ success: true })
      setTimeout(() => { setStatus({ success: false }) }, 3000)
    }, 1200)
    setStatus({ success: false });
  }
})(InnerForm)

const RegistroForm = () => (
  <div className="mx-auto sm:max-w-sm md:max-w-md">
    <OuterForm className="mx-auto" />
  </div>
)

export default RegistroForm