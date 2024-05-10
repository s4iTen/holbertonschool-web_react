import React from "react";

function BodySection({ title }) {

  return (
    <div className="bodySection">
      <h2>{title}</h2>
      <p>{title}</p>
    </div>
  );
}

export { BodySection };
