import React from "react";

function BodySection({ title, children }) {

  return (
    <div className="bodySection">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export { BodySection };
