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
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    if (e.target.files) {
      this.setState({ [e.target.name]: e.target.files[0] });
      document.getElementById("guatita").innerHTML = e.target.files[0].name
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
      <div>
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
          <p>
            <label>
              Nombre:<br />
              <input type="text" name="name" onChange={this.handleChange}  className="md:w-md block text-grey-darkest bg-grey-lightest focus:bg-grey-light rounded-lg shadow mb-4 p-3 text-sm" />
            </label>
          </p>
          <p>
            <label>
              Apellido:<br />
              <input type="text" name="name" onChange={this.handleChange}  className="md:w-md block  text-grey-darkest bg-grey-lightest focus:bg-grey-light rounded-lg shadow mb-4 p-3 text-sm" />
            </label>
          </p>
          <p>
            <label>
              Email:<br />
              <input type="email" name="name" onChange={this.handleChange}  className="md:w-md block text-grey-darkest bg-grey-lightest rounded-lg shadow mb-4 p-3 text-sm" />
            </label>
          </p>
          <p>
            Sube tu CV:
            <label for="file-upload" className="rounded-lg bg-grey-lightest block cursor-pointer shadow p-2 max-w-xs">
            <div id="guatita">...</div>
              <div>
              <input
                id="file-upload"
                type="file"
                name="attachment"
                onChange={this.handleChange}
                
                className="hidden"
              />
              </div>
            </label>
          </p>
          <p>
            <button type="submit" className="mt-4 rounded text-white bg-green-dark hover:bg-green px-6 py-2 shadow-md ">Send</button>
          </p>
        </form>
      </div>
    );
  }
}