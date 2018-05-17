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

export default class MicroForm extends React.Component {
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
      body: encode({ "form-name": "micro-form", ...this.state })
    })
      .then(() => alert("Hemos recibido tu formulario"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className="flex flex-col mx-auto text-center py-8">
        <form
          name="micro-form"
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
          <div>
            <label className="mb-4 hidden">
                Nombre:<br />
              </label>
             <textarea type="message" name="message" onChange={this.handleChange} className="appearance-none text-blue-darkest bg-white focus:bg-blue-lightest border-green-lightest rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2" placeholder="Tu idea..."></textarea>
          </div>
            <div className="text-center">
              <button type="submit" className="mt-4 mx-2 sm:mx-4 rounded text-white bg-green-dark hover:bg-green px-6 py-3 shadow-md" onSubmit={this.handleSubmit}>Enviar</button>
            </div>
        </form>
      </div>

    );
  }
}