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
  setFieldValue
}) => (
    <Form>

      <div className="flex flex-col items-center md:items-stretch ">
        <div className="md:flex justify-around">
          <div className=" py-3 px-4">
            <label className="font-medium">
              Nombre:<br />
            </label>
            {touched.nombre && errors.nombre && <div className="text-sm py-2 italic text-red-light">{errors.nombre}</div>}
            <Field type="text" name="nombre" className="appearance-none text-grey-darkest bg-white focus:bg-grey-lighest rounded-lg shadow py-3 px-4 text-sm my-2 w-48 xs:w-64 sm:w-96 md:w-48" />
          </div>

          <div className="py-3 px-2 px-4">
            <label className="font-medium">
              Apellido:<br />
            </label>
            {touched.apellido && errors.apellido && <div className="text-sm py-2 italic text-red-light">{errors.apellido}</div>}
            <Field type="text" name="apellido" className="appearance-none text-grey-darkest bg-white focus:bg-grey-lightest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-stretch">
        <div className="py-3 px-2 px-4 mx-auto">
          <label className="font-medium">
            Email:<br />
          </label>
          {touched.email && errors.email && <div className="text-sm py-2 italic text-red-light">{errors.email}</div>}
          <Field type="email" name="email" placeholder="Email" className="appearance-none text-grey-darkest bg-white focus:bg-grey-lighest border-green-lightest block rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2 mx-auto w-48 xs:w-64 sm:w-96" />
        </div>
      </div>

      

      <div className="flex flex-col items-center md:items-stretch">
        <div className="py-3 px-2 px-4 mx-auto">  
          <label for="file-upload" className="font-medium"> Sube tu CV: </label>
            <div>
              <input id="file" name="file" type="file" onChange={(event) => {
              setFieldValue("file", event.currentTarget.files[0]);
            }} className="appearance-none text-grey-darkest bg-white focus:bg-grey-lighest border-green-lightest block rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2 mx-auto w-48 xs:w-64 sm:w-96"/>
            </div>
          </div>
        </div>
      

      <div className="text-center">
        <button type="submit" className="mt-4 mx-2 sm:mx-4 rounded text-white bg-green active:bg-green-dark px-8 py-3 shadow-md" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
      </div>

    </Form>
  )

const OuterForm = withFormik({
  mapPropsToValues({ email, nombre, apellido, errors }) {
    return {
      email: email || '',
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
    setTimeout(() => {
      resetForm();
      setSubmitting(false)
    }, 2000)
  }
})(InnerForm)

const FileUploadForm = () => (
  <div className="mx-auto sm:max-w-sm md:max-w-md">
    <OuterForm className="mx-auto" />
  </div>
)

export default FileUploadForm