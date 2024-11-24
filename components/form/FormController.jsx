import React from "react";
import Form from "./Form";
import user from "../../data/Seller/user"
import location from "../../data/Seller/location"

function FormController({ type }) {
  let payload;

  switch (type) {
    case "user":
      payload = user;
      break;
    case "location":
      payload = location;
      break;

    default:
      payload = null;
  }

  if (!payload) {
    return <div>Invalid form type.</div>;
  }

  return <Form payload={payload} />;
}

export default FormController;
