import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const InnerFormStandard = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  isSubmitting
}) => (
    <Form>
      <div className="flex flex-col items-center md:items-stretch ">
        <div className="md:flex justify-between">
          <div className=" py-3 px-4">
            <label className="font-medium">
              Nombre:<br />
            </label>
            {touched.nombre && errors.nombre && <div className="text-sm py-2 italic text-red-light">{errors.nombre}</div>}
            <Field type="text" name="nombre" className="appearance-none text-grey-darkest focus:bg-grey-light bg-grey-lightest rounded-lg shadow py-3 px-4 text-sm my-2 w-48 xs:w-64 sm:w-96 md:w-48" />
          </div>

          <div className="py-3 px-2 px-4">
            <label className="font-medium">
              Apellido:<br />
            </label>
            {touched.apellido && errors.apellido && <div className="text-sm py-2 italic text-red-light">{errors.apellido}</div>}
            <Field type="text" name="apellido" className="appearance-none text-grey-darkest bg-grey-lightest focus:bg-grey-light rounded-lg shadow py-3 px-4 text-sm my-2 w-48 xs:w-64 sm:w-96 md:w-48" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-stretch">
        <div className="py-3 px-2 px-4">
          <label className="font-medium mx-auto">
            Email:<br />
          </label>
          {touched.email && errors.email && <div className="text-sm py-2 italic text-red-light">{errors.email}</div>}
          <Field type="email" name="email" placeholder="Email" className="appearance-none text-grey-darkest bg-grey-lightest  focus:bg-blue-lighest rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2" />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-stretch">
        <div className="py-3 px-2 px-4">
          <label className="font-medium mx-auto">
            Cuéntanos:<br />
          </label>
          <textarea name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} className="appearance-none text-grey-darkest bg-grey-lightest  focus:bg-blue-lightest border-green-lightest rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2" placeholder="Tu idea..."></textarea>
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="mt-4 mx-2 sm:mx-4 rounded text-white bg-green active:bg-green-dark px-8 py-3 shadow-md" disabled={isSubmitting} >{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
      </div>

    </Form>
  )

const OuterFormStandard = withFormik({
  mapPropsToValues({ email, message, nombre, apellido, errors }) {
    return {
      email: email || '',
      message: message || '',
      nombre: nombre || '',
      apellido: apellido || '',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string('¿Cuál es tu dirección de correo?').email('Por favor asegúrate que sea una dirección válida').required('¿Cuál es tu dirección de correo?'),
    nombre: Yup.string().required('¿Cuál es tu nombre?'),
    apellido: Yup.string().required('¿Cuál es tu apellido?'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    fetch('https://3a19x0n8o8.execute-api.us-east-1.amazonaws.com/prod/feedback/', {
      method: "POST",
      body: JSON.stringify({
        "email:": values.email,
        "message": values.message,
        "nombre": values.nombre,
        "apellido": values.apellido
      })
    })
      .then(()=>{
        resetForm();
        setSubmitting(false)
      })
      .catch(error => alert(error))
  }
})(InnerFormStandard)

const StandardForm = () => (
  <div className="mx-auto sm:max-w-sm md:max-w-md">
    <OuterFormStandard className="mx-auto" />
  </div>
)

export default StandardForm