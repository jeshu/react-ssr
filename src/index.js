import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import routes from "./client/Routes";
import proxy from "express-http-proxy";
import matchRoutes from "./helpers/matchRoutes";

const app = express();
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);
app.use(express.static("dist"));
app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  const render = () => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.url) {
      res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  };
  Promise.all(promises).then(render);
});

app.listen(( process.env.PORT || 3000), () => {
  console.log("server running on port 3000");
});
