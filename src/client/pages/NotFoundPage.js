import React from "react";

const NotFoundPage = ({staticContext = {}}) => {
    staticContext.notFound = true;
    return (
    <div className="center-align">
      <h3>Oopps... ! Page Not Found</h3>;
    </div>
  );
};

export default { component: NotFoundPage };
