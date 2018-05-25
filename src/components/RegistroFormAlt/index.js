import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class RegistroFormAlt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    if (e.target.files) {
      this.setState({ [e.target.value]: e.target.files[0] });
    } else {
      this.setState({ [e.target.value]: e.target.value });
    }
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      body: encode({ "form-name": "registro-form-alt", ...this.state })
    })
      .then(() => alert("Hemos recibido tu formulario"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className="mx-auto sm:max-w-sm md:max-w-md">
        <form
          name="registro-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <div className="flex flex-col items-center md:items-stretch">
            <div className="py-3 px-2 px-4">
              <label className="font-medium mx-auto md:ml-12">
                Cuéntanos:<br />
              </label>
              <textarea type="message" name="message" onChange={this.handleChange} className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-blue-lightest border-green-lightest rounded-lg shadow py-3 px-4 text-sm w-48 xs:w-64 sm:w-96 md:w-128 my-2" placeholder="Tu idea..."></textarea>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-stretch ">
            <div className="md:flex justify-around">
              <div className=" py-3 px-4">
                <label className="font-medium">
                  Nombre:<br />
                </label>
                <input type="text" name="name" onChange={this.handleChange} className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-lighest rounded-lg shadow py-3 px-4 text-sm my-2 w-48 xs:w-64 sm:w-96 md:w-48" />
              </div>

              <div className="py-3 px-2 px-4">
                <label className="font-medium">
                  Apellido:<br />
                </label>
                <input type="text" name="name" onChange={this.handleChange} className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-darkest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-stretch">
            <div className="py-3 px-2 px-4">
              <label className="font-medium mx-auto md:ml-12">
                Email:<br />
              </label>
              <input type="email" name="name" onChange={this.handleChange} className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-lighest border-green-lightest block rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2 mx-auto w-48 xs:w-64 sm:w-96" />
            </div>
          </div>


          <div className="flex flex-col items-center md:items-stretch ">
            <div className="md:flex justify-around">
              <div className="py-3">
                <label className="font-medium">
                  País:<br />
                </label>
                <div className="relative">
                  <select name="pais" id="pais" className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-darkest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2">
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
                  </select>
                  <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current ml-4 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              <div className="py-3">
                <label className="font-medium">
                  Dispositivo:<br />
                </label>
                <div className="relative">
                  <select name="dispositivo" id="dispositivo" className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-darkest rounded-lg shadow py-3 px-4 w-48 xs:w-64 sm:w-96 md:w-48 text-sm my-2">
                    <option value="Android">Android</option>
                    <option value="iPhone">iPhone</option>
                  </select>
                  <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
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
              <div className="relative">
                <input type="banco" name="name" onChange={this.handleChange} className="appearance-none text-grey-lighter bg-grey-darkest focus:bg-grey-lighest border-green-lightest block rounded-lg shadow py-3 px-4 text-sm w-48 xs:w-64 sm:w-96 md:w-128 my-2 mx-auto" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="mt-4 mx-2 sm:mx-4 rounded text-white bg-green hover:bg-green-dark px-8 py-3 shadow-md" onSubmit={this.handleSubmit}>Enviar</button>
          </div>

        </form>
      </div>

    );
  }
}