import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var _cio = _cio || [];
            (function() {
               var a,b,c;a=function(f){return function(){_cio.push([f].
               concat(Array.prototype.slice.call(arguments,0)))}};b=["identify",
               "track"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
               var t = document.createElement('script'),
                   s = document.getElementsByTagName('script')[0];
               t.async = true;
               t.id    = 'cio-tracker';
               t.setAttribute('data-site-id', '920a5a36c54bba26e448');
               t.src = 'https://assets.customer.io/assets/track.js';
               s.parentNode.insertBefore(t, s);
              })();
        `,
            }}
          />
          {this.props.postBodyComponents}

        </body>
      </html>
    )
  }
}
