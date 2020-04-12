import React from "react";
import { renderToString } from "react-dom/server";
import routes from "../client/Routes";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import serializeJavascript from "serialize-javascript";
import { Helmet } from "react-helmet";
import App from "../client/App";

export default (req, store, context) => {
  
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          <App.component routes={routes[0].routes}/>
        </div>
      </StaticRouter>
    </Provider>
  );
  
  const helmet = Helmet.renderStatic();
  const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link async rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    </head>
    <body>
        <div id="root">${content}</div>
        <script>
          window.INITAL_STATE=${serializeJavascript(store.getState())}
        </script>
        <script defer src="bundle.client.js"></script>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>`;
  return template;
};
