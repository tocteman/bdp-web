import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class StandardForm extends React.Component {
  constructor(props) {
    super(props);
   this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...this.state })
    })
      .then(() => alert("Hemos recibido tu formulario"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className="mx-auto sm:max-w-sm md:max-w-md">
        <form
          name="standard-form"
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
              <input type="text" name="name" onChange={this.handleChange} className="appearance-none text-grey-darkest focus:bg-grey-light bg-grey-lightest rounded-lg shadow py-3 px-4 text-sm my-2" /> 
            </div>

            <div className="md:w-1/2 py-3 px-2 px-4 text-center">
              <label className="mb-4">
                Apellido:<br />
              </label>
              <input type="text" name="name" onChange={this.handleChange} className="appearance-none text-grey-darkest bg-grey-lightest focus:bg-grey-light rounded-lg shadow py-3 px-4 text-sm my-2" />
            </div>

            <div className="py-3 px-2 px-4 md:max-w-lg text-center">
              <label>
                Email:<br />
              </label>
              <input type="email" name="name" onChange={this.handleChange} className="appearance-none text-grey-darkest bg-grey-lightest  focus:bg-blue-lighest rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2" />
            </div>

            <div className="w-full py-3 px-4 max-w-lg text-center">
              <label>Cuéntanos<br/></label>
              <textarea type="message" name="message" onChange={this.handleChange} className="appearance-none text-grey-darkest bg-grey-lightest  focus:bg-blue-lightest border-green-lightest rounded-lg shadow py-3 px-4 text-sm md:w-128 my-2"></textarea>
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