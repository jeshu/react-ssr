import React from "react";
import Helmet from "react-helmet";

function HomePage() {
  const head = () =>(
    <Helmet>
      <title>React SSR</title>
      <meta property="og:title" content="React SSR" />
    </Helmet>
  )
  return (
    <div className="center-align" style={{marginTop:'300px'}}>
      {head()}
      <h3>Welcome</h3>
      <p>Check out some awesome stuff for React SSR</p>
      </div>
  );
}

export default { component: HomePage };
