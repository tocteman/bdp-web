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

export default class FileUploadForm extends React.Component {
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
      <div className="mx-auto max-w-xs sm:max-w-sm max-w-md">
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
            <div className="w-1/2 py-3 px-4">
              <label className="mb-4">
                Nombre:
              </label>
              <input type="text" name="name" onChange={this.handleChange} className="appearance-none text-blue-darkest bg-white focus:bg-blue-lighest border-green-lightest  rounded-lg shadow py-3 px-4 text-sm my-2" /> 
            </div>

            <div className="w-1/2 py-3 px-4">
              <label className="mb-4">
                Apellido:
              </label>
              <input type="text" name="name" onChange={this.handleChange} className="appearance-none text-blue-darkest bg-white focus:bg-blue-lighest border-green-lightest  rounded-lg shadow py-3 px-4 text-sm my-2" />
            </div>

            <div className="w-1/2 md:w-full py-3 px-4 max-w-sm sm:max-w-md   md:max-w-lg">
              <label>
                Email:
              </label>
              <input type="email" name="name" onChange={this.handleChange} className="appearance-none text-blue-darkest bg-white focus:bg-blue-lighest border-green-lightest  rounded-lg shadow py-3 px-4 text-sm md:w-108 my-2" />
            </div>

            <div className="w-1/2 md:w-full py-3 px-4 max-w-lg">
              <label>Cuéntanos</label>
              <textarea type="message" name="message" onChange={this.handleChange} className="appearance-none text-blue-darkest bg-white focus:bg-blue-lightest border-green-lightest rounded-lg shadow py-3 px-4 text-sm md:w-108 my-2"></textarea>
            </div>

            <div className="">
              <button type="submit" className="mt-4 rounded text-white bg-green-dark hover:bg-green px-6 py-2 shadow-md" onSubmit={this.handleSubmit}>Enviar</button>
            </div>
          </div>
        </form>
      </div>
      
    );
  }
}