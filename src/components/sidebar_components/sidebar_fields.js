import React from "react";
import Button from "@material-ui/core/Button";

let typesOfFields = ["Rent","Bedrooms", "Bathrooms"];

const generateMinMaxFields = () => {
  let components = [];
  typesOfFields.forEach((field) => {
    components.push(
      <div id={`sidebar_${field}`}>
        <h3 id="sidebar_subtitle">{field}</h3>
          <input
            type="text"
            id="sidebar_min_field"
            name="Min"
            placeholder ={field === "Rent" ? "$Min" : "Min"}
          />
        <input
          type="text"
          id="sidebar_max_field"
          name="Max"
          placeholder ={field === "Rent" ? "$Max" : "Max"}
          />
          <Button variant="contained" id="sidebar_button">
            Go
          </Button>
      </div>
    );
  });
  return components;
};

export default function SidebarFields() {
  return (
    <div >
      <div id="sidebar_parish">
        <h3 id="sidebar_subtitle">Parish</h3>
        <input
          type="text"
          id="sidebar_field"
          name="fname"
          placeholder="Enter parish"
        />
        <span>
          <Button variant="contained" id="sidebar_button">
            Go
          </Button>
        </span>
      </div>
      {generateMinMaxFields()}

    </div>
  );
}
