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

export default class RegistroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    if (e.target.files) {
      this.setState({ [e.target.name]: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      body: encode({ "form-name": "file-upload", ...this.state })
    })
      .then(() => alert("Hemos recibido tu formulario"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className="mx-auto sm:max-w-sm md:max-w-md">
        <form
          name="file-upload"
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
          <div className="md:flex flex-wrap justify-center mx-3">
            <div className="md:w-1/2 py-3 px-4 text-center">
              <label className="mb-4">
                Nombre:<br />
              </label>
              <input type="text" name="name" onChange={this.handleChange} className="appearance-none text-grey-darkest bg-white focus:bg-grey-lighest border-green-lightest  rounded-lg shadow py-3 px-4 text-sm my-2" />
            </div>

            <div className="md:w-1/2 py-3 px-2 px-4 text-center">
              <label className="mb-4">
                Apellido:<br />
              </label>
              <input type="text" name="name" onChange={this.handleChange} className="appearance-none text-grey-darkest bg-white focus:bg-grey-lighest border-green-lightest  rounded-lg shadow py-3 px-4 text-sm my-2" />
            </div>

            <div className="py-3 px-2 px-4 md:max-w-lg text-center">
              <label>
                Email:<br />
              </label>
              <input type="email" name="name" onChange={this.handleChange} className="appearance-none text-grey-darkest bg-white focus:bg-grey-lighest border-green-lightest  rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2" />
            </div>

            <div className="py-3 px-2 px-4 max-w-sm md:max-w-lg text-center">
              <label>
                País:<br />
              </label>
              <div className="relative">
                <select name="pais" id="pais" className="appearance-none text-grey-darkest bg-white focus:bg-grey-lightest rounded-lg shadow py-3 px-4 text-sm md:w-64 my-2">
                <option value="España">España</option>
                <option value="México">México</option>
                <option value="Chile">Chile</option>
                <option value="Perú">Perú</option>
                <option value="Colombia">Colombia</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Panamá">Panamá</option>          
                </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            </div>

            <div className="py-3 px-2 px-4 max-w-sm md:max-w-lg text-center">
              <label>
                Banco:<br />
              </label>
              <div className="">
                <select name="banco" id="banco" className="appearance-none text-grey-darkest bg-white focus:bg-grey-lightest rounded-lg shadow py-3 px-4 text-sm md:w-64 my-2">
                    <option value="Banco_Santander" selected="">Banco Santander</option>
                    <option value="Banco_Santander_Banefe">Banco Santander Banefe</option>
                    <option value="Banco_BBVA">Banco BBVA</option>
                    <option value="Banco_BICE">Banco BICE</option>
                    <option value="Banco_Internacional">Banco Internacional</option>
                    <option value="Banco_Itaú">Banco Itaú</option>
                    <option value="Banco_de_Chile_/_Edwards-Citi">Banco de Chile / Edwards-Citi</option>
                    <option value="Corpbanca">Corpbanca</option>
                    <option value="Banco_Crédito_e_Inversiones">Banco Crédito e Inversiones</option>
                    <option value="Banco_del_Desarrollo">Banco del Desarrollo</option>
                    <option value="Banco_Estado">Banco Estado</option>
                    <option value="Banco_Falabella">Banco Falabella</option>
                    <option value="Banco_Security">Banco Security</option>
                    <option value="Scotiabank">Scotiabank</option>
                    <option value="Rabobank">Rabobank</option>
                    <option value="HSBC_Bank">HSBC Bank</option>
                    <option value="Banco_Ripley">Banco Ripley</option>
                    <option value="Banco_Paris">Banco Paris</option>
                    <option value="Banco_Consorcio">Banco Consorcio</option>
                    <option value="Coopeuch">Coopeuch</option>
                  </select>
                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>


            <div className="py-3 px-2 px-4 max-w-sm md:max-w-lg text-center">
              <label>
                Dispositivo:<br />
              </label>
              <div className="relative">
                <select name="dispositivo" id="dispositivo" className="appearance-none text-grey-darkest bg-white focus:bg-grey-lightest rounded-lg shadow py-3 px-4 text-sm md:w-64 my-2">
                  <option value="Android">Android</option>
                  <option value="iPhone">iPhone</option>
                </select>
                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="w-full py-3 px-4 max-w-lg text-center">
              <label>Cuéntanos<br /></label>
              <textarea type="message" name="message" onChange={this.handleChange} className="appearance-none text-grey-darkest bg-white focus:bg-grey-lightest border-green-lightest rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="mt-4 mx-2 sm:mx-4 rounded text-white bg-green hover:bg-green-dark px-6 py-3 shadow-md" onSubmit={this.handleSubmit}>Enviar</button>
            </div>
          </div>
        </form>
      </div>

    );
  }
}