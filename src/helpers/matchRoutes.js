import { matchPath } from "react-router";

function matchRoutes(routes, pathname) {
  var branch =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  routes.some(function (route) {
    var match = route.path
      ? matchPath(pathname, route)
      : branch.length
      ? branch[branch.length - 1].match // use parent match
      : "/"; // use default "root" match

    if (match) {
      branch.push({ route: route, match: match });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });

  return branch;
}

export default matchRoutes;
