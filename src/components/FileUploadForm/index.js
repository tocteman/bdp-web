import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
// import LinkedInLogin from '../LinkedinLogin'

const InnerForm = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
  status
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
          {touched.correo && errors.correo && <div className="text-sm py-2 italic text-red-light">{errors.correo}</div>}
          <Field type="email" name="correo" placeholder="Email" className="appearance-none text-grey-darkest bg-white focus:bg-grey-lighest border-green-lightest block rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2 mx-auto w-48 xs:w-64 sm:w-96" />
        </div>
      </div>



      <div className="flex flex-col items-center md:items-stretch">
        <div className="py-3 px-2 px-4 mx-auto">
          <label className="font-medium">
            Link a tu CV:<br />
          </label>
          {touched.curriculo && errors.curriculo && <div className="text-sm py-2 italic text-red-light">{errors.curriculo}</div>}
          <Field type="text" name="curriculo" placeholder="Déjanos un link" className="appearance-none text-grey-darkest bg-white focus:bg-grey-lighest border-green-lightest block rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2 mx-auto w-48 xs:w-64 sm:w-96" />
        </div>
      </div>

      {/* <LinkedInLogin /> */}

      <div className="text-center">
        <button type="submit" className="mt-4 mx-2 sm:mx-4 rounded text-white bg-green active:bg-green-dark px-8 py-3 shadow-md" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
        
         {status && status.success && <div className="text-large py-4 text-green">¡Gracias! Hemos recibido tu información.</div>  } 
      </div>

    </Form>
  )

const OuterForm = withFormik({
  mapPropsToValues({ correo, nombre, apellido, curriculo, errors}) {
    return {
      correo: correo || '',
      nombre: nombre || '',
      apellido: apellido || '',
      curriculo: curriculo || '',
    }
  },
  validationSchema: Yup.object().shape({
    correo: Yup.string('¿Cuál es tu dirección de correo?').email('Por favor asegúrate que sea una dirección válida').required('¿Cuál es tu dirección de correo?'),
    nombre: Yup.string().required('¿Cuál es tu nombre?'),
    apellido: Yup.string().required('¿Cuál es tu apellido?'),
    curriculo: Yup.string().required('¿Dónde vemos tu CV? Por favor déjanos un link de Dropbox, Google Drive o similar, o envíanos el link a tu perfil de LinkedIn.')
  }),
  
  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    setStatus({success:false});
    setTimeout(() => {
      _cio.identify({
        id: values.correo,
        email: values.correo,
        created_at: Math.floor(Date.now() / 1000),
        name: values.nombre,
        apellido: values.apellido, 
        curriculo: values.curriculo,
        interesUnirse: true
      });
      resetForm();
      setSubmitting(false)
      setStatus({ success: true })
      setTimeout( () => {setStatus({success: false})}, 3000)
    }, 1200)
    setStatus({ success: false });
  }
})(InnerForm)

const FileUploadForm = () => (
  <div className="mx-auto sm:max-w-sm md:max-w-md">
    <OuterForm className="mx-auto" />
  </div>
)

export default FileUploadForm